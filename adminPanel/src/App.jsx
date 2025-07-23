import React, { useState, useEffect } from "react";
import AdminLogin from "./AdminLogin";
import AdminDashboard from "../src/components/AdminDashboard.jsx"; // this is the component you show after login

const App = () => {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // When the app loads, check if a token already exists
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <>
      {isAuthenticated ? (
        // If authenticated, show the dashboard and pass logout function
        <AdminDashboard />
      ) : (
        // If not authenticated, show login form
        <AdminLogin />
      )}
    </>
  );
};

export default App;
