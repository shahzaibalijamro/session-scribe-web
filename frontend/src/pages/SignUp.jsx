import React, { useState } from "react";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { name, email, password } = formData;
    if (!name || !email || !password) {
      toast.error("Please fill out all fields");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    try {
      const response = await axios.post(
        "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/users/signup",
        formData
      );
      toast.success("Signup successful!");
      navigate("/signin");
    } catch (error) {
      toast.error(error.response?.data?.message || "Signup failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Right Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
            Get Started
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label className="text-sm text-purple-700 font-medium">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 mt-1 rounded-full border border-gray-300 shadow-inner focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-purple-700 font-medium">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 mt-1 rounded-full border border-gray-300 shadow-inner focus:outline-none"
                placeholder="JohnDoe@gmail.com"
              />
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-purple-700 font-medium">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 mt-1 rounded-full border border-gray-300 shadow-inner focus:outline-none pr-10"
                  placeholder="********"
                />
                <div
                  className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-400 to-indigo-600 text-white font-medium py-3 mt-4 rounded-full shadow-md hover:opacity-90 transition"
            >
              {loading ? "Signing Up..." : "Sign Up"}
            </button>
          </form>

          {/* OR sign up with */}
          <div className="flex items-center justify-center mt-6">
            <hr className="flex-grow border-purple-600" />
            <span className="mx-2 text-sm text-purple-600">
              Or sign up with
            </span>
            <hr className="flex-grow border-purple-600" />
          </div>

          <div className="flex justify-center space-x-6 mt-4">
            <img
              src="https://cdn-icons-png.flaticon.com/512/281/281764.png"
              alt="Google"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733547.png"
              alt="Facebook"
              className="w-6 h-6 cursor-pointer"
            />
            <img
              src="https://cdn-icons-png.flaticon.com/512/733/733579.png"
              alt="Twitter"
              className="w-6 h-6 cursor-pointer"
            />
          </div>

          <p className="text-center mt-6 text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/signin" className="text-purple-600 cursor-pointer">
              Sign in
            </Link>
          </p>
        </div>
        {/* Left Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src="/authPic.png"
            alt="Signup illustration"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
