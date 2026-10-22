import AppError from "../utils/appError.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { validationResult } from "express-validator";
import crypto from "crypto";
import sendEmail from "../utils/email.js";
import { sendWelcomeEmail } from "../utils/email.utils.js";
import { verifyIdToken } from "../config/firebase-admin.js";

// class AppError extends Error {
//   constructor(message, statusCode) {
//     super(message);
//     this.statusCode = statusCode;
//     this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
//   }
// }

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};

export const signup = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return next(new AppError("Validation failed", 400, errors.array()));
  }

  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return next(new AppError("User already exists", 409));
    }

    const newUser = await User.create({ name, email, password });
    const token = generateToken(newUser._id);

    try {
          await sendWelcomeEmail(email, name);
          console.log(`✅ Welcome email sent to ${email}`);
        } catch (emailError) {
          // Log error but don't fail the signup process
          console.error(`⚠️ Failed to send welcome email to ${email}:`, emailError.message);
        }

    res.status(201).json({
      status: "success",
      message: "User created successfully",
      token,
      data: {
        user: {
          id: newUser._id,
          name: newUser.name,
          email: newUser.email,
        },
      },
    });
  } catch (err) {
    next(err);
  }
};

export const getTotalUsage = async (req, res) => {
  const user = req.user;
  try {
    const userData = await User.findById(user._id).select('totalSecondsUsed recordingSecondsUsed liveTranscriptionSecondsUsed audioNotesSecondsUsed');
    res.json({
      totalSecondsUsed: userData.totalSecondsUsed,
      recordingSecondsUsed: userData.recordingSecondsUsed,
      liveTranscriptionSecondsUsed: userData.liveTranscriptionSecondsUsed,
      audioNotesSecondsUsed: userData.audioNotesSecondsUsed
    });
  } catch (error) {
    console.error("Error fetching total usage:", error);
    res.status(500).json({ error: "Failed to fetch total usage" });
  }
};

export const login = async (req, res, next) => {
  console.log(req.body);
  
  try {
    const { email, password, loginSource } = req.body;

    if (!email || !password) {
      return next(new AppError("Email and password are required", 400));
    }

    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return next(new AppError("Invalid credentials", 401));
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return next(new AppError("Invalid credentials", 401));
    }

    // Check if login is from extension and update the field
    if (loginSource === "extension" && !user.hasInstalledExtension) {
      user.hasInstalledExtension = true;
      await user.save();
    }

    const token = generateToken(user._id);

    res.status(200).json({
      status: "success",
      message: "Logged in successfully",
      token,
      data: {
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      },
    });
  } catch (err) {
    next(err);
  }
};

export const googleSignIn = async (req, res, next) => {
  try {
    const { idToken, email, name, photoURL, uid } = req.body;

    if (!idToken) {
      return next(new AppError("Firebase ID token is required", 400));
    }

    // Verify the Firebase ID token
    let decodedToken;
    try {
      decodedToken = await verifyIdToken(idToken);
    } catch (error) {
      return next(new AppError("Invalid Firebase token", 401));
    }

    // Check if the token's email matches the provided email
    if (decodedToken.email !== email) {
      return next(new AppError("Token email mismatch", 401));
    }

    // Check if user exists in your database
    let user = await User.findOne({ email });

    if (user) {
      // User exists, log them in
      const token = generateToken(user._id);
      
      res.status(200).json({
        status: "success",
        message: "Logged in with Google successfully",
        token,
        data: {
          user: {
            id: user._id,
            name: user.name,
            email: user.email,
          },
        },
      });
    } else {
      // User doesn't exist, create a new account
      const newUser = await User.create({
        name: name || decodedToken.name,
        email: email,
        password: 'google-auth-' + uid, // Placeholder password for Google users
        // You might want to add a field to indicate this is a Google user
        authProvider: 'google',
        googleUid: uid,
        avatar: photoURL
      });

      const token = generateToken(newUser._id);

      // Send welcome email (optional)
      try {
        await sendWelcomeEmail(email, name);
        console.log(`✅ Welcome email sent to ${email}`);
      } catch (emailError) {
        console.error(`⚠️ Failed to send welcome email to ${email}:`, emailError.message);
      }

      res.status(201).json({
        status: "success",
        message: "Account created and logged in with Google successfully",
        token,
        data: {
          user: {
            id: newUser._id,
            name: newUser.name,
            email: newUser.email,
          },
        },
      });
    }
  } catch (err) {
    next(err);
  }
};

export const protect = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return next(
        new AppError("You are not logged in! Please log in to access.", 401)
      );
    }

    // 2. Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // 3. Check if user still exists
    const currentUser = await User.findById(decoded.id);
    if (!currentUser) {
      return next(
        new AppError("The user belonging to this token no longer exists.", 401)
      );
    }

    req.user = currentUser;
    next();
  } catch (err) {
    next(err);
  }
};

export const forgotPassword = async (req, res, next) => {
  try {
    // 1. Get user based on POSTed email
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return next(
        new AppError("There is no user with that email address.", 404)
      );
    }

    // 2. Generate the random reset token
    const resetToken = user.createPasswordResetToken();
    await user.save({ validateBeforeSave: false });

    // 3. Send it to user's email
    const resetURL = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;
    const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to: ${resetURL}.\nIf you didn't forget your password, please ignore this email!`;

    try {
      await sendEmail({
        email: user.email,
        subject: "Your password reset token (valid for 10 min)",
        message,
      });

      res.status(200).json({
        status: "success",
        message: "Token sent to email!",
      });
    } catch (err) {
      user.passwordResetToken = undefined;
      user.passwordResetExpires = undefined;
      await user.save({ validateBeforeSave: false });

      return next(
        new AppError(
          "There was an error sending the email. Try again later!",
          500
        )
      );
    }
  } catch (err) {
    next(err);
  }
};

export const resetPassword = async (req, res, next) => {
  try {
    // 1. Get user based on the token
    const hashedToken = crypto
      .createHash("sha256")
      .update(req.params.token)
      .digest("hex");

    const user = await User.findOne({
      passwordResetToken: hashedToken,
      passwordResetExpires: { $gt: Date.now() },
    });

    // 2. If token has not expired, and there is user, set the new password
    if (!user) {
      return next(new AppError("Token is invalid or has expired", 400));
    }

    user.password = req.body.password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;
    user.passwordChangedAt = Date.now();
    await user.save();

    const token = generateToken(user._id);

    res.status(200).json({
      status: "success",
      token,
      data: {
        user,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const updatePassword = async (req, res, next) => {
  try {
    // 1. Get user from collection
    const user = await User.findById(req.user.id).select("+password");

    // 2. Check if POSTed current password is correct
    if (!(await user.comparePassword(req.body.currentPassword))) {
      return next(new AppError("Your current password is wrong.", 401));
    }

    // 3. If so, update password
    user.password = req.body.newPassword;
    await user.save();

    // 4. Log user in, send JWT
    const token = generateToken(user._id);

    res.status(200).json({
      status: "success",
      token,
      data: {
        user,
      },
    });
  } catch (err) {
    next(err);
  }
};

export const getMe = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];

    if (!token) {
      return next(new AppError("Not authenticated", 401));
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(decoded.id).select("-password");
    if (!user) {
      return next(new AppError("User not found", 404));
    }

    res.status(200).json({
      status: "success",
      data: {
        user,
      },
    });
  } catch (err) {
    next(err);
  }
};
