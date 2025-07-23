import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const handleLogout = () => {
    localStorage.removeItem("adminToken"); //remove login token onClick logout
  };
  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Admin Dashboard</h2>
      <div className="row justify-content-center">
        <div className="col-md-6 text-center">
          <Link to="/admin/upload" className="btn btn-secondary btn-lg mb-3">
            Upload New Article
          </Link>
          <br />
          <Link
            to="/admin/articles"
            className="btn btn-outline-secondary mb-3 btn-lg">
            Manage All Uploads
          </Link>
          <br />
          <Link to="/admin/contacts" className="btn btn-outline-dark btn-lg">
            Manage All contact
          </Link>
        </div>
      </div>
      <button onClick={handleLogout} className="btn btn-danger mb-4">
        Log Out
      </button>
    </div>
  );
};

export default AdminDashboard;
