import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import AdminLogin from "./AdminLogin.jsx";
import UploadArticle from "./components/UploadArticle.jsx";
import AdminDashboard from "./components/AdminDashboard.jsx";
import ArticleList from "./components/ArticleList.jsx";
import Home from "./components/Home.jsx";
import ContactList from "./components/contactList.jsx";
import PrivateRoute from "./PrivateRoute.jsx";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* login Route */}
          <Route path="/" element={<Home />} />
          <Route path="/admin/login" element={<AdminLogin />} />

          <Route
            path="/admin"
            element={
              <PrivateRoute>
                <AdminDashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/upload"
            element={
              <PrivateRoute>
                <UploadArticle />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/articles"
            element={
              <PrivateRoute>
                <ArticleList />
              </PrivateRoute>
            }
          />
          <Route
            path="/admin/contacts"
            element={
              <PrivateRoute>
                <ContactList />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default AppRoutes;
