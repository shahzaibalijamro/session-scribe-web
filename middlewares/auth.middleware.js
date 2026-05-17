import jwt from "jsonwebtoken";
import User from "../models/user.model.js";

export const verifyToken = async (req, res, next) => {
  let token = req.headers["authorization"] || req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Access denied. No token provided.",
    });
  }

  if (token.startsWith("Bearer ")) {
    token = token.slice(7, token.length).trimLeft();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({
        message: "Invalid token. User not found.",
      });
    }
    const user2 = user.toJSON();

    if (user2.status !== "active") {
      return res.status(403).json({
        message: "Account is not active. Please contact support.",
      });
    }

    req.user = user2;
    next();
  } catch (err) {
    console.log(err);

    let message = "Invalid or expired token.";
    if (err.name === "TokenExpiredError") {
      message = "Session expired. Please log in again.";
    } else if (err.name === "JsonWebTokenError") {
      message = "Invalid token. Please log in again.";
    }

    return res.status(401).json({ message });
  }
};

export const adminOnly = (req, res, next) => {
  const { user } = req;

  if (user.role !== "admin") {
    console.log("hello from adminOnly middleware");

    return res.status(403).json({
      message: "Access denied. Admin privileges required.",
    });
  }
  next();
};
