import React, { useState } from "react";
import axiosInstance from "../axiosInstance";
import { Link, useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

const UploadArticle = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    tags: "",
    readTime: "",
    author: "",
    preamble: "", // Added for excerpt.preamble
    passage: "", // Added for excerpt.passage
  });
  const [imageFile, setImageFile] = useState(null); // Stores selected image file
  const [uploading, setUploading] = useState(false); // Upload status
  const [error, setError] = useState(""); // Error message if any
  const [successMsg, setSuccessMsg] = useState(""); // Success confirmation
  const navigate = useNavigate();

  // Handles text field updates
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handles file selection for image
  const handleFileChange = (e) => {
    setImageFile(e.target.files[0]);
  };

  // Handles the entire form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMsg("");
    setUploading(true);

    try {
      // Step 1: Prepare FormData for multipart/form-data
      const formDataToSend = new FormData();

      // Append image file (field name must match backend, e.g. req.file("image"))
      formDataToSend.append("image", imageFile);

      // Append normal string fields
      formDataToSend.append("title", formData.title);
      formDataToSend.append("category", formData.category);
      formDataToSend.append("readTime", formData.readTime);
      formDataToSend.append("author", formData.author);

      // Convert excerpt into JSON with preamble & passage
      formDataToSend.append(
        "excerpt",
        JSON.stringify({
          preamble: formData.preamble,
          passage: formData.passage,
        })
      );

      // Convert comma-separated tags into an array and stringify it
      const tagArray = formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== "");
      formDataToSend.append("tags", JSON.stringify(tagArray));

      // Send the request to your MERN backend
      await axiosInstance.post(
        "https://portfolio-website-backend-uf19.onrender.com/api/articles/uploads",
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file uploads
          },
        }
      );

      // On success: reset form and redirect
      setSuccessMsg("Article uploaded successfully!");
      setFormData({
        title: "",
        category: "",
        tags: "",
        readTime: "",
        author: "",
        preamble: "",
        passage: "",
      });
      setImageFile(null);
      setUploading(false);
      
    } catch (err) {
      console.error("Upload failed:", err);
      setError(`Error uploading article: ${err.message}`);
      setUploading(false);
    }
  };

  return (
    <div className="container py-5">
      <div className="mb-4">
        <Link to="/admin" className="btn btn-outline-dark">
          <FaArrowLeft className="me-2" />
          Back to Home
        </Link>
      </div>

      <h2 className="mb-4">Upload New Article</h2>

      <form onSubmit={handleSubmit} className="row g-3">
        {/* Title */}
        <div className="col-md-6">
          <label className="form-label">Title</label>
          <input
            type="text"
            name="title"
            className="form-control"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>

        {/* Category */}
        <div className="col-md-6">
          <label className="form-label">Category</label>
          <select
            name="category"
            className="form-select"
            value={formData.category}
            onChange={handleChange}
            required>
            <option value="">Select a category</option>
            <option value="React">React</option>
            <option value="CSS">CSS</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Bootstrap">Bootstrap</option>
            <option value="Backend">Backend</option>
            <option value="Tools">Tools</option>
          </select>
        </div>

        {/* Read Time */}
        <div className="col-md-6">
          <label className="form-label">Read Time (e.g., "5 mins")</label>
          <input
            type="text"
            name="readTime"
            className="form-control"
            value={formData.readTime}
            onChange={handleChange}
          />
        </div>

        {/* Author */}
        <div className="col-md-6">
          <label className="form-label">Author</label>
          <input
            type="text"
            name="author"
            className="form-control"
            value={formData.author}
            onChange={handleChange}
          />
        </div>

        {/* Tags */}
        <div className="col-md-6">
          <label className="form-label">Tags (comma-separated)</label>
          <input
            type="text"
            name="tags"
            className="form-control"
            value={formData.tags}
            onChange={handleChange}
          />
        </div>

        {/* Excerpt Preamble */}
        <div className="col-12">
          <label className="form-label">Excerpt Preamble</label>
          <textarea
            name="preamble"
            className="form-control"
            rows="2"
            value={formData.preamble}
            onChange={handleChange}></textarea>
        </div>

        {/* Excerpt Passage */}
        <div className="col-12">
          <label className="form-label">Excerpt Passage</label>
          <textarea
            name="passage"
            className="form-control"
            rows="3"
            value={formData.passage}
            onChange={handleChange}></textarea>
        </div>

        {/* Description */}
        

        {/* Cover Image */}
        <div className="col-12">
          <label className="form-label">Cover Image</label>
          <input
            type="file"
            accept="image/*"
            className="form-control"
            onChange={handleFileChange}
            required
          />
        </div>

        {/* Submit */}
        <div className="col-12">
          <button
            type="submit"
            className="btn btn-primary"
            disabled={uploading}>
            {uploading ? "Uploading..." : "Upload Article"}
          </button>
        </div>
      </form>
      {error && <p className="alert alert-danger">{error}</p>}
      {successMsg && <p className="alert alert-success">{successMsg}</p>}
    </div>
  );
};

export default UploadArticle;
