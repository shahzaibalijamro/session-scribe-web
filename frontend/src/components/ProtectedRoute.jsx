import axios from "axios";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    const token = localStorage.getItem("token");

    const verifyToken = async () => {
      try {
        const response = await axios.get("https://principal-joellyn-shahzaibalijamro-247e8013.koyeb.app/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (response.data.status === "success") {
          setIsAuthenticated(true);
        } else {
          setIsAuthenticated(false);
        }
      } catch (error) {
        localStorage.removeItem("token");
        setIsAuthenticated(false);
      }
    };

    if (token) {
      verifyToken();
    } else {
      setIsAuthenticated(false);
    }
  }, []);

  if (isAuthenticated === null)
    return (
      <div className="flex items-center justify-center h-screen w-full">
        Loading...
      </div>
    );
  if (isAuthenticated === false) return <Navigate to="/signin" replace />;

  return children;
};

export default ProtectedRoute;
