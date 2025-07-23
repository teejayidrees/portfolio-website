// src/pages/AdminLogin.jsx
import React, { useState } from "react";
import axios from "./axiosInstance.js";
import { useNavigate } from "react-router";
/**
 * AdminLogin handles the login form for admin authentication.
 * On successful login, it saves the token and redirects to the dashboard.
 */
const AdminLogin = () => {
  const [email, setEmail] = useState(""); // Email input state
  const [password, setPassword] = useState(""); // Password input state
  const [error, setError] = useState(""); // Error message
  const navigate = useNavigate();
  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Clear previous errors

    try {
      // POST request to your login endpoint
      const res = await axios.post("/admin/login", {
        email,
        password,
      });

      // Save token to localStorage
      localStorage.setItem("adminToken", res.data.token);

      // Redirect to dashboard
      navigate("/admin");
    } catch (err) {
      setError(err.response?.data?.message || "Login failed");
      console.log(err);
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "400px" }}>
      <h2>Admin Login</h2>

      {error ? (
        <div className="alert alert-danger" role="alert">
          {error}
        </div>
      ) : (
        ""
      )}

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>
    </div>
  );
};

export default AdminLogin;
