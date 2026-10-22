import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import ProtectedRouteWrapper from "./components/route/ProtectedRouteWrapper.jsx";
import { AppProvider } from "./components/context/AppContext.jsx"; // Add this import

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AppProvider>
      {" "}
      {/* Add this wrapper */}
      <BrowserRouter>
        <App />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </BrowserRouter>
    </AppProvider>{" "}
    {/* Close the wrapper */}
  </StrictMode>
);
