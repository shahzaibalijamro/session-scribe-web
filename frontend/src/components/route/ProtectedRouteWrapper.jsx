// // // // import axios from "axios";
// // // // import { useLocation, useNavigate } from "react-router-dom";
// // // // import { useEffect, useState } from "react";
// // // // import { useApp } from "../context/AppContext";
// // // // import { protectedRoutes } from "../../api/api";

import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import axios from "axios";

// // // // const ProtectedRouteWrapper = ({ children }) => {
// // // //   const location = useLocation();
// // // //   const navigate = useNavigate();
// // // //   const { setUser } = useApp();
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [token] = useState(() => localStorage.getItem("token"));

// // // //   const fetchProfile = async (url, token) => {
// // // //     try {
// // // //       const response = await axios.get(url, {
// // // //         headers: {
// // // //           Authorization: token,
// // // //         },
// // // //       });

// // // //       setUser(response.data.user);
// // // //       if (response.status === 200) {
// // // //         setLoading(false);
// // // //       }
// // // //     } catch (error) {
// // // //       localStorage.removeItem("token");
// // // //       navigate("/login", { replace: true });
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     if (token) {
// // // //       fetchProfile(protectedRoutes, token);
// // // //     } else {
// // // //       navigate("/login", { replace: true });
// // // //     }
// // // //   }, [location.pathname]);

// // // //   return (
// // // //     <>
// // // //       {loading ? (
// // // //         <div className="text-center text-gray-600 py-6 text-xl font-semibold">
// // // //           <div className="flex items-center justify-center">
// // // //             <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // // //           </div>
// // // //         </div>
// // // //       ) : (
// // // //         children
// // // //       )}
// // // //     </>
// // // //   );
// // // // };

// // // // export default ProtectedRouteWrapper;

// // // // import axios from "axios";
// // // // import { useLocation, useNavigate } from "react-router-dom";
// // // // import { useEffect, useState } from "react";
// // // // import { useApp } from "../context/AppContext";
// // // // import { protectedRoutes } from "../../api/api";

// // // // const ProtectedRouteWrapper = ({ children }) => {
// // // //   const location = useLocation();
// // // //   const navigate = useNavigate();
// // // //   const { setUser, user, isAdmin, setIsAdmin } = useApp();
// // // //   const [loading, setLoading] = useState(true);
// // // //   const [token] = useState(() => localStorage.getItem("token"));

// // // //   const fetchProfile = async (url, token) => {
// // // //     console.log(123);
    
// // // //     try {
// // // //       const response = await axios.get(url, {
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`,
// // // //         },
// // // //       });

// // // //       if (response.status === 200) {
// // // //         console.log(response.data.user);
// // // //         setIsAdmin(response.data.user.role === "admin");
        
// // // //         setUser(response.data.user);
// // // //         console.log(response.data.user);
        

// // // //           if (response.data.user.role === "admin" && location.pathname !== "/admin" || "/queries") {
// // // //             navigate("/admin", { replace: true });
// // // //           }
// // // //           //  else {
// // // //           // //   navigate("/", { replace: true });
// // // //           // // }

// // // //         // Prevent non-admins from accessing admin routes
// // // //         if (
// // // //           location.pathname.startsWith("/admin") &&
// // // //           response.data.user.role !== "admin"
// // // //         ) {
// // // //           navigate("/home", { replace: true });
// // // //         }

// // // //         setLoading(false);
// // // //       }
// // // //     } catch (error) {
// // // //       console.error("Authentication error:", error);
// // // //       localStorage.removeItem("token");
// // // //       navigate("/signin", {
// // // //         replace: true,
// // // //         state: { from: location.pathname },
// // // //       });
// // // //     }
// // // //   };

// // // //   useEffect(() => {
// // // //     if (!token) {
// // // //       console.log("Token not found, redirecting to signin");
// // // //       navigate("/signin", {
// // // //         replace: true,
// // // //         state: { from: location.pathname },
// // // //       });
// // // //       return;
// // // //     }

// // // //     // If user data is already loaded, just check the route access
// // // //     if (user) {
// // // //       if (location.pathname.startsWith("/admin") && user.role !== "admin") {
// // // //         navigate("/home", { replace: true });
// // // //       }
// // // //       setLoading(false);
// // // //       return;
// // // //     }

// // // //     // Otherwise fetch user profile
// // // //     fetchProfile(protectedRoutes, token);
// // // //   }, [location.pathname, token]);

// // // //   if (loading) {
// // // //     return (
// // // //       <div className="flex items-center justify-center min-h-screen">
// // // //         <div className="text-center text-gray-600 py-6 text-xl font-semibold">
// // // //           <div className="flex items-center justify-center">
// // // //             <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // // //           </div>
// // // //           <p className="mt-4">Verifying authentication...</p>
// // // //         </div>
// // // //       </div>
// // // //     );
// // // //   }

// // // //   return children;
// // // // };

// // // // export default ProtectedRouteWrapper;


// // // import axios from "axios";
// // // import { useLocation, useNavigate } from "react-router-dom";
// // // import { useEffect, useState } from "react";
// // // import { useApp } from "../context/AppContext";
// // // import { protectedRoutes } from "../../api/api";

// // // const ProtectedRouteWrapper = ({ children }) => {
// // //   const location = useLocation();
// // //   const navigate = useNavigate();
// // //   const { setUser, user, isAdmin, setIsAdmin } = useApp();
// // //   const [loading, setLoading] = useState(true);
// // //   const [token] = useState(() => localStorage.getItem("token"));

// // //   const fetchProfile = async (url, token) => {
// // //     try {
// // //       const response = await axios.get(url, {
// // //         headers: {
// // //           Authorization: `Bearer ${token}`,
// // //         },
// // //       });

// // //       if (response.status === 200) {
// // //         setIsAdmin(response.data.user.role === "admin");
// // //         setUser(response.data.user);

// // //         // Redirect admins to /admin only if they are not on /admin or /queries
// // //         if (
// // //           response.data.user.role === "admin" &&
// // //           !["/admin", "/queries", "/feedbacks"].includes(location.pathname)
// // //         ) {
// // //           navigate("/admin", { replace: true });
// // //         }

// // //         // Prevent non-admins from accessing admin routes
// // //         if (
// // //           location.pathname.startsWith("/admin") ||
// // //           location.pathname === "/queries" || location.pathname === "/feedbacks"
// // //         ) {
// // //           if (response.data.user.role !== "admin") {
// // //             navigate("/home", { replace: true });
// // //           }
// // //         }

// // //         setLoading(false);
// // //       }
// // //     } catch (error) {
// // //       console.error("Authentication error:", error);
// // //       localStorage.removeItem("token");
// // //       navigate("/signin", {
// // //         replace: true,
// // //         state: { from: location.pathname },
// // //       });
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     if (!token) {
// // //       console.log("Token not found, redirecting to signin");
// // //       navigate("/signin", {
// // //         replace: true,
// // //         state: { from: location.pathname },
// // //       });
// // //       return;
// // //     }

// // //     // If user data is already loaded, just check the route access
// // //     if (user) {
// // //       if (
// // //         (location.pathname.startsWith("/admin") ||
// // //           location.pathname === "/queries") || location.pathname === "/feedbacks" &&
// // //         user.role !== "admin"
// // //       ) {
// // //         navigate("/home", { replace: true });
// // //       }
// // //       setLoading(false);
// // //       return;
// // //     }

// // //     // Otherwise fetch user profile
// // //     fetchProfile(protectedRoutes, token);
// // //   }, [location.pathname, token]);

// // //   if (loading) {
// // //     return (
// // //       <div className="flex items-center justify-center min-h-screen">
// // //         <div className="text-center text-gray-600 py-6 text-xl font-semibold">
// // //           <div className="flex items-center justify-center">
// // //             <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// // //           </div>
// // //           <p className="mt-4">Verifying authentication...</p>
// // //         </div>
// // //       </div>
// // //     );
// // //   }

// // //   return children;
// // // };

// // // export default ProtectedRouteWrapper;

// // import axios from "axios";
// // import { useLocation, useNavigate } from "react-router-dom";
// // import { useEffect, useState } from "react";
// // import { useApp } from "../context/AppContext";
// // import { protectedRoutes } from "../../api/api";
// // import { toast } from "react-toastify";

// // const ProtectedRouteWrapper = ({ children }) => {
// //   const location = useLocation();
// //   const navigate = useNavigate();
// //   const { setUser, user, isAdmin, setIsAdmin } = useApp();
// //   const [loading, setLoading] = useState(true);
// //   const [token] = useState(() => localStorage.getItem("token"));

// //   const fetchProfile = async (url, token) => {
// //     try {
// //       const response = await axios.get(url, {
// //         headers: {
// //           Authorization: `Bearer ${token}`,
// //         },
// //       });
// //       console.log(response.data, "========>>>>>>");

// //       if (response.status === 200 && response.data.user.role !== "admin" && !response.data.user.plan) {
// //         setIsAdmin(response.data.user.role === "admin");
// //         setUser(response.data.user);
// //         setLoading(false);
// //         toast.error("Please Upgrade Your Plan");
// //         navigate("/plan", { replace: true });
// //         return;
// //       }
      
// //       if (response.status === 200) {
// //         setIsAdmin(response.data.user.role === "admin");
// //         setUser(response.data.user);

// //         // Redirect admins to /admin if they are not on /admin, /queries, or /feedbacks
// //         if (
// //           response.data.user.role === "admin" &&
// //           !["/admin", "/queries", "/feedbacks", "/history", "/articles-admin", "/articles-admin/new", "/articles-admin/edit/:id"].includes(location.pathname)
// //         ) {
// //           navigate("/admin", { replace: true });
// //         }

// //         // Prevent non-admins from accessing admin-only routes
// //         if (
// //           ["/admin", "/queries", "/feedbacks", "/history", "/articles-admin", "/articles-admin/new", "/articles-admin/edit/:id"].includes(location.pathname) &&
// //           response.data.user.role !== "admin"
// //         ) {
// //           navigate("/home", { replace: true });
// //         }

// //         setLoading(false);
// //       }
// //     } catch (error) {
// //       console.error("Authentication error:", error);
// //       localStorage.removeItem("token");
// //       navigate("/signin", {
// //         replace: true,
// //         state: { from: location.pathname },
// //       });
// //     }
// //   };

// //   useEffect(() => {
// //     if (!token) {
// //       navigate("/signin", {
// //         replace: true,
// //         state: { from: location.pathname },
// //       });
// //       return;
// //     }

// //     // If user data is already loaded, just check the route access
// //     if (user) {
// //       if (
// //         ["/admin", "/queries", "/feedbacks", "/history", "/articles-admin", "/articles-admin/new", "/articles-admin/edit/:id"].includes(location.pathname) &&
// //         user.role !== "admin"
// //       ) {
// //         navigate("/home", { replace: true });
// //       } else if (
// //         user.role === "admin" &&
// //         !["/admin", "/queries", "/feedbacks", "/history", "/articles-admin", "/articles-admin/new", "/articles-admin/edit/:id"].includes(location.pathname)
// //       ) {
// //         navigate("/admin", { replace: true });
// //       }
// //       setLoading(false);
// //       return;
// //     }

// //     // Otherwise fetch user profile
// //     fetchProfile(protectedRoutes, token);
// //   }, [location.pathname, token]);

// //   if (loading) {
// //     return (
// //       <div className="flex items-center justify-center min-h-screen">
// //         <div className="text-center text-gray-600 py-6 text-xl font-semibold">
// //           <div className="flex items-center justify-center">
// //             <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
// //           </div>
// //           <p className="mt-4">Verifying authentication...</p>
// //         </div>
// //       </div>
// //     );
// //   }

// //   return children;
// // };

// // export default ProtectedRouteWrapper;


// import axios from "axios";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import { useApp } from "../context/AppContext";
// import { protectedRoutes } from "../../api/api";
// import { toast } from "react-toastify";

// const ProtectedRouteWrapper = ({ children }) => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { setUser, user, isAdmin, setIsAdmin } = useApp();
//   const [loading, setLoading] = useState(true);
//   const [token] = useState(() => localStorage.getItem("token"));

//   const adminRoutes = [
//     "/admin",
//     "/queries",
//     "/feedbacks",
//     "/history",
//     "/articles-admin",
//     "/articles-admin/new",
//   ];

//   const isAdminRoute = (path) => {
//     return (
//       adminRoutes.includes(path) || path.startsWith("/articles-admin/edit/") || path.startsWith("/articles/")
//     );
//   };

//   const fetchProfile = async (url, token) => {
//     try {
//       const response = await axios.get(url, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         },
//       });

//       if (response.status === 200) {
//         const userData = response.data.user;
//         const isUserAdmin = userData.role === "admin";

//         setUser(userData);
//         setIsAdmin(isUserAdmin);

//         // If user is NOT admin and has no plan → redirect to /plan
//         if (!isUserAdmin && !userData.plan) {
//           toast.error("Please Upgrade Your Plan");
//           navigate("/plan", { replace: true });
//           setLoading(false);
//           return;
//         }

//         // If user is admin and NOT on allowed admin routes → redirect to /admin
//         if (isUserAdmin && !isAdminRoute(location.pathname)) {
//           navigate("/admin", { replace: true });
//         }

//         // If user is NOT admin and trying to access admin route → redirect to /home
//         if (!isUserAdmin && isAdminRoute(location.pathname)) {
//           navigate("/home", { replace: true });
//         }

//         setLoading(false);
//       }
//     } catch (error) {
//       console.error("Authentication error:", error);
//       localStorage.removeItem("token");
//       navigate("/signin", {
//         replace: true,
//         state: { from: location.pathname },
//       });
//     }
//   };

//   useEffect(() => {
//     if (!token) {
//       navigate("/signin", {
//         replace: true,
//         state: { from: location.pathname },
//       });
//       return;
//     }

//     if (user) {
//       const isUserAdmin = user.role === "admin";

//       if (!isUserAdmin && isAdminRoute(location.pathname)) {
//         navigate("/home", { replace: true });
//       } else if (isUserAdmin && !isAdminRoute(location.pathname)) {
//         navigate("/admin", { replace: true });
//       }

//       setLoading(false);
//       return;
//     }

//     fetchProfile(protectedRoutes, token);
//   }, [location.pathname, token]);

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center min-h-screen">
//         <div className="text-center text-gray-600 py-6 text-xl font-semibold">
//           <div className="flex items-center justify-center">
//             <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//           </div>
//           <p className="mt-4">Verifying authentication...</p>
//         </div>
//       </div>
//     );
//   }

//   return children;
// };

// export default ProtectedRouteWrapper;











import { protectedRoutes } from "../../api/api";
import { toast } from "react-toastify";



const ProtectedRouteWrapper = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { setUser, user, isAdmin, setIsAdmin } = useApp();
  const [loading, setLoading] = useState(true);
  const [token] = useState(() => localStorage.getItem("token"));

  const adminOnlyRoutes = [
    "/admin",
    "/queries",
    "/feedbacks",
    "/history",
    "/articles-admin",
    "/articles-admin/new",
  ];

  // Routes that start with these paths
  const articleRoutes = [
    "/articles/",
    "/articles-admin/edit/"
  ];

  const isAdminRoute = (path) => {
    return adminOnlyRoutes.includes(path) || 
           path.startsWith("/articles-admin/edit/");
  };

  const isArticleRoute = (path) => {
    return articleRoutes.some(route => path.startsWith(route));
  };

  const fetchProfile = async (url, token) => {
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        const userData = response.data.user;
        console.log(userData, "========>>>>>>");
        const isUserAdmin = userData.role === "admin";

        setUser(userData);
        setIsAdmin(isUserAdmin);

        // If user is NOT admin and has no plan → redirect to /plan
        if (!isUserAdmin && !userData.plan && !isArticleRoute(location.pathname)) {
          toast.error("Please Upgrade Your Plan");
          navigate("/plan", { replace: true });
          setLoading(false);
          return;
        }

        // If user is admin and NOT on allowed admin routes or article routes → redirect to /admin
        if (isUserAdmin && !isAdminRoute(location.pathname) && !isArticleRoute(location.pathname)) {
          navigate("/admin", { replace: true });
        }

        // If user is NOT admin and trying to access admin-only route → redirect to /home
        if (!isUserAdmin && isAdminRoute(location.pathname)) {
          navigate("/home", { replace: true });
        }

        setLoading(false);
      }
    } catch (error) {
      console.error("Authentication error:", error);
      localStorage.removeItem("token");
      navigate("/signin", {
        replace: true,
        state: { from: location.pathname },
      });
    }
  };

  useEffect(() => {
    if (!token) {
      navigate("/signin", {
        replace: true,
        state: { from: location.pathname },
      });
      return;
    }

    if (user) {
      const isUserAdmin = user.role === "admin";

      if (!isUserAdmin && isAdminRoute(location.pathname)) {
        navigate("/home", { replace: true });
      } else if (isUserAdmin && !isAdminRoute(location.pathname) && !isArticleRoute(location.pathname)) {
        navigate("/admin", { replace: true });
      }

      setLoading(false);
      return;
    }

    fetchProfile(protectedRoutes, token);
  }, [location.pathname, token]);

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center text-gray-600 py-6 text-xl font-semibold">
          <div className="flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="mt-4">Verifying authentication...</p>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRouteWrapper;