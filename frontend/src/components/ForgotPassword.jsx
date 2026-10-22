import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post("https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/users/forgot-Password", {
        email,
      });
      toast.success("Password reset link sent to your email!");
      setEmailSent(true);
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to send reset link");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-3xl shadow-xl">
        <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
          Forgot Password
        </h2>

        {emailSent ? (
          <div className="text-center">
            <p className="mb-4">
              We've sent a password reset link to your email.
            </p>
            <Link to="/signin" className="text-purple-600 font-medium">
              Back to Sign In
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-purple-700 font-medium">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-3 mt-1 rounded-full border border-gray-300 shadow-inner focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-400 to-indigo-600 text-white font-medium py-3 mt-4 rounded-full shadow-md hover:opacity-90 transition disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Reset Link"}
            </button>

            <div className="text-center mt-4">
              <Link to="/signin" className="text-purple-600 text-sm">
                Remember your password? Sign In
              </Link>
            </div>
          </form>
        )}
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
