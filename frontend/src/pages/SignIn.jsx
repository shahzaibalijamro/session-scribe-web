// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { Eye, EyeOff } from "lucide-react";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import { Link, useNavigate } from "react-router-dom";

// const SignIn = () => {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [token,setToken] = useState(localStorage.getItem("token") || null);

// useEffect(()=>{
//   if (token) {
//     navigate("/home");
//   }
// },[token]);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const validateForm = () => {
//     const { email, password } = formData;
//     if (!email || !password) {
//       toast.error("Please fill out all fields");
//       return false;
//     }
//     return true;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!validateForm()) return;

//     setLoading(true);
//     try {
//       const response = await axios.post(
//         "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/users/signin",
//         formData
//       );
//       const token = response.data.token;

//       if (token) {
//         localStorage.setItem("token", token);
//         navigate("/home");
//       } else {
//         toast.error("Login failed Please try again");
//       }
//     } catch (error) {
//       toast.error(error.response?.data?.message || "Signin failed");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="flex w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden">
//         {/* Left Image */}
//         <div className="w-1/2 hidden md:block">
//           <img
//             src="/authPic.png"
//             alt="Signup illustration"
//             className="h-full w-full object-cover"
//           />
//         </div>
//         {/* Right Form */}
//         <div className="w-full md:w-1/2 p-10">
//           <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
//             Login
//           </h2>

//           <form onSubmit={handleSubmit} className="space-y-4">
//             {/* Email */}
//             <div>
//               <label className="text-sm text-purple-700 font-medium">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="w-full p-3 mt-1 rounded-full border border-gray-300 shadow-inner focus:outline-none"
//                 placeholder="JohnDoe@gmail.com"
//               />
//             </div>

//             {/* Password */}
//             <div>
//               <label className="text-sm text-purple-700 font-medium">
//                 Password
//               </label>
//               <div className="relative">
//                 <input
//                   type={showPassword ? "text" : "password"}
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="w-full p-3 mt-1 rounded-full border border-gray-300 shadow-inner focus:outline-none pr-10"
//                   placeholder="********"
//                 />
//                 <div
//                   className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
//                 </div>
//               </div>
//             </div>
//             <div className="flex justify-end mt-1">
//               <Link
//                 to="/forgot-password"
//                 className="text-sm text-purple-600 hover:underline"
//               >
//                 Forgot password?
//               </Link>
//             </div>
//             {/* Submit Button */}
//             <button
//               type="submit"
//               disabled={loading}
//               className="w-full bg-gradient-to-r from-purple-400 to-indigo-600 text-white font-medium py-3 mt-4 rounded-full shadow-md hover:opacity-90 transition"
//             >
//               {loading ? "Signing in..." : "Sign in"}
//             </button>
//           </form>

//           <p className="text-center mt-6 text-sm text-gray-500">
//             Don't have an account?{" "}
//             <Link to="/signup" className="text-purple-600 cursor-pointer">
//               Sign up
//             </Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignIn;




import React, { useEffect, useState } from "react";
import axios from "axios";
import { Eye, EyeOff } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";
import { signInWithPopup, signInWithRedirect, getRedirectResult } from 'firebase/auth';// Adjust path as needed
import { auth, googleProvider } from "../config/firebase";

const SignIn = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [googleLoading, setGoogleLoading] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("token") || null);

  useEffect(() => {
    if (token) {
      navigate("/home");
    }
  }, [token]);

  // Handle redirect result for Google sign-in (for mobile compatibility)
  useEffect(() => {
    const handleRedirectResult = async () => {
      try {
        const result = await getRedirectResult(auth);
        if (result) {
          await handleGoogleAuthSuccess(result);
        }
      } catch (error) {
        console.error("Google sign-in redirect error:", error);
        toast.error("Google sign-in failed. Please try again.");
      }
    };

    handleRedirectResult();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const { email, password } = formData;
    if (!email || !password) {
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
        "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/users/signin",
        formData
      );
      const token = response.data.token;

      if (token) {
        localStorage.setItem("token", token);
        setToken(token);
        toast.success("Signed in successfully!");
        navigate("/home");
      } else {
        toast.error("Login failed Please try again");
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Signin failed");
    } finally {
      setLoading(false);
    }
  };

  // Handle successful Google authentication
  const handleGoogleAuthSuccess = async (result) => {
    try {
      const user = result.user;
      const idToken = await user.getIdToken();

      // Send the Google user data to your backend
      const response = await axios.post(
        "https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/users/google-signin",
        {
          idToken,
          email: user.email,
          name: user.displayName,
          photoURL: user.photoURL,
          uid: user.uid
        }
      );

      const token = response.data.token;
      if (token) {
        localStorage.setItem("token", token);
        setToken(token);
        toast.success("Signed in with Google successfully!");
        navigate("/home");
      }
    } catch (error) {
      console.error("Google sign-in backend error:", error);
      toast.error(error.response?.data?.message || "Google sign-in failed");
    }
  };

  // Handle Google Sign-In
  const handleGoogleSignIn = async () => {
    setGoogleLoading(true);
    try {
      // Try popup first, fallback to redirect on mobile
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

      if (isMobile) {
        // Use redirect for better mobile compatibility
        await signInWithRedirect(auth, googleProvider);
        // The result will be handled in the useEffect above
      } else {
        // Use popup for desktop
        const result = await signInWithPopup(auth, googleProvider);
        await handleGoogleAuthSuccess(result);
      }
    } catch (error) {
      console.error("Google sign-in error:", error);

      // Handle specific error cases
      if (error.code === 'auth/popup-closed-by-user') {
        toast.info("Sign-in cancelled");
      } else if (error.code === 'auth/popup-blocked') {
        toast.error("Popup was blocked. Please allow popups and try again.");
      } else {
        toast.error("Google sign-in failed. Please try again.");
      }
    } finally {
      setGoogleLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="flex w-full max-w-6xl bg-white rounded-3xl shadow-xl overflow-hidden">
        {/* Left Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src="/authPic.png"
            alt="Signup illustration"
            className="h-full w-full object-cover"
          />
        </div>
        {/* Right Form */}
        <div className="w-full md:w-1/2 p-10">
          <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
            Login
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
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
                className="w-full p-3 mt-1 rounded-full border border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-400"
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
                  className="w-full p-3 mt-1 rounded-full border border-gray-300 shadow-inner focus:outline-none focus:ring-2 focus:ring-purple-400 pr-10"
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
            <div className="flex justify-end mt-1">
              <Link
                to="/forgot-password"
                className="text-sm text-purple-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-purple-400 to-indigo-600 text-white font-medium py-3 mt-4 rounded-full shadow-md hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-4 text-gray-500 text-sm">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>

          {/* Google Sign-In Button */}
          <button
            onClick={handleGoogleSignIn}
            disabled={googleLoading}
            className="w-full flex items-center justify-center gap-3 bg-white border border-gray-300 text-gray-700 font-medium py-3 rounded-full shadow-md hover:bg-gray-50 transition disabled:opacity-50"
          >
            {googleLoading ? (
              <div className="w-5 h-5 border-2 border-gray-300 border-t-gray-700 rounded-full animate-spin"></div>
            ) : (
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
            )}
            {googleLoading ? "Signing in..." : "Continue with Google"}
          </button>

          <p className="text-center mt-6 text-sm text-gray-500">
            Don't have an account?{" "}
            <Link to="/signup" className="text-purple-600 cursor-pointer hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default SignIn;