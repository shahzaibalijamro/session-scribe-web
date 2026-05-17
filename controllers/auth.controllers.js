import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { sendWelcomeEmail } from '../utils/email.utils.js';
import historyModel from "../models/history.model.js";

const verifyUser = (req, res) => {
  const userData = {
    _id: req.user._id,
    name: req.user.name,
    email: req.user.email,
    role: req.user.role,
    createdAt: req.user.createdAt,
    plan: req.user.plan,
    avatar: req.user.avatar,
    // NEW FIELD: Include hasInstalledExtension in the response
    hasInstalledExtension: req.user.hasInstalledExtension || false,
  };
  
  res.json({
    message: "You are authenticated!",
    user: userData,
  });
};

const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials.",
        field: "email",
      });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid credentials.",
        field: "password",
      });
    }

    if (user.status !== "active") {
      return res.status(403).json({
        message: "Account is not active. Please contact support.",
      });
    }

    // Generate JWT
    const payload = {
      id: user._id,
      role: user.role || "user",
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    res.json({
      message: "Signed in successfully.",
      token,
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Server error. Please try again later.",
    });
  }
};

// const signupUser = async (req, res) => {
//   try {
//     const { name, email, role = "user", password } = req.body;

//     console.log("signing up");
    

//     // Check if email already exists
//     const existingEmail = await User.findOne({ email });
//     if (existingEmail) {
//       return res.status(409).json({
//         message: "Email already exists.",
//         field: "email",
//       });
//     }

//     // Hash password
//     const salt = await bcrypt.genSalt(12);
//     const hash = await bcrypt.hash(password, salt);

//     // Create user
//     const newUser = new User({
//       name,
//       email,
//       password: hash,
//       role,
//       status: "active",
//     });

//     await newUser.save();

//     const payload = {
//       id: newUser._id,
//       role: newUser.role,
//     };
//     const token = jwt.sign(payload, process.env.JWT_SECRET);

//     try {
//       await sendWelcomeEmail(email, name);
//       console.log(`✅ Welcome email sent to ${email}`);
//     } catch (emailError) {
//       // Log error but don't fail the signup process
//       console.error(`⚠️ Failed to send welcome email to ${email}:`, emailError.message);
//     }

//     res.status(201).json({
//       message: "Account created successfully.",
//       token,
//       user: {
//         _id: newUser._id,
//         name: newUser.name,
//         email: newUser.email,
//         role: newUser.role,
//       },
//     });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({
//       message: "Server error during registration. Please try again.",
//     });
//   }
// };

const signupUser = async (req, res) => {
  try {
    const { name, email, role = "user", password } = req.body;

    console.log("signing up");
    

    // Check if email already exists
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res.status(409).json({
        message: "Email already exists.",
        field: "email",
      });
    }

    // Hash password
    const salt = await bcrypt.genSalt(12);
    const hash = await bcrypt.hash(password, salt);

    // Create user
    const newUser = new User({
      name,
      email,
      password: hash,
      role,
      status: "active",
    });

    await newUser.save();

    // Create history record for user self-registration
    await historyModel.create({
      user: newUser._id, // The user who registered themselves
      action: 'self-registered',
      targetType: 'User',
      targetId: newUser._id,
      details: {
        registeredUser: {
          name: newUser.name,
          email: newUser.email,
          role: newUser.role,
          status: newUser.status
        },
        registrationMethod: 'self-signup',
        ipAddress: req.ip || req.connection.remoteAddress, // Optional: track IP
        userAgent: req.get('User-Agent') // Optional: track browser/device
      }
    });

    const payload = {
      id: newUser._id,
      role: newUser.role,
    };
    const token = jwt.sign(payload, process.env.JWT_SECRET);

    try {
      await sendWelcomeEmail(email, name);
      console.log(`✅ Welcome email sent to ${email}`);
    } catch (emailError) {
      // Log error but don't fail the signup process
      console.error(`⚠️ Failed to send welcome email to ${email}:`, emailError.message);
    }

    res.status(201).json({
      message: "Account created successfully.",
      token,
      user: {
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server error during registration. Please try again.",
    });
  }
};

export { verifyUser, loginUser, signupUser };
