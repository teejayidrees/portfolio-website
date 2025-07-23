import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import AdminLogin from "./AdminLogin";
import UploadArticle from "./components/UploadArticle";
import AdminDashboard from "./components/AdminDashboard";
import ArticleList from "./components/ArticleList";
import Home from "./components/Home";
import ContactList from "./components/ContactList";
import PrivateRoute from "./PrivateRoute";

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
