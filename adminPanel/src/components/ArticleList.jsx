import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import moment from "moment";

const ArticleList = () => {
  // State to hold all fetched articles
  const [articles, setArticles] = useState([]);
  //error state to display error encountered
  const [error, setError] = useState("");

  //success message
  const [success, setSuccess] = useState(null);

  // Fetch articles from backend API
  const fetchArticles = async () => {
    try {
      const res = await axios.get("https://portfolio-website-backend-uf19.onrender.com/api/articles");
      setArticles(res.data);
    } catch (err) {
      console.error("Failed to fetch articles", err);
      setError(`Error getting the articles ${err}`);
    }
  };

  // Delete a specific article by ID
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this article?"))
      return;
    try {
      await axios.delete(`https://portfolio-website-backend-uf19.onrender.com/api/articles/${id}` , {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
        },
      });
      // Update the UI after deletion
      setArticles((prev) => prev.filter((article) => article._id !== id));
      setSuccess("Article deleted successfully");
      console.log("Article deleted successfully");
    } catch (err) {
      console.error("Delete failed", err);
      setError(`Error deleting the article ${err}`);
    }
  };

  useEffect(() => {
    let timer;
    if (error || success) {
      timer = setTimeout(() => {
        setError("");
        setSuccess("");
      }, 4000);
    }
    return () => clearTimeout(timer);
  }, [error, success]);
  // Fetch articles when component mounts
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className="container py-5">
      {/* Back link to admin dashboard */}
      <div className="mb-4">
        <Link to="/admin" className="btn btn-outline-dark">
          <FaArrowLeft className="me-2" />
          Back to Home
        </Link>
      </div>

      <h2 className="mb-4">All Uploaded Articles</h2>
      <div>
        {(error || success) && (
          <div
            style={{
              backgroundColor: error ? "red" : "green",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
              marginBottom: "10px",
            }}>
            <p>{error ? error : success}</p>
          </div>
        )}

        {/* Table to list articles */}
        <div className="table-responsive">
          <table className="table table-bordered table-hover align-middle">
            <thead className="table-light">
              <tr>
                <th>Cover</th>
                <th>Title</th>
                <th>Category</th>
                <th>Actions</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              {articles.map((article) => (
                <tr key={article._id}>
                  {/* Image preview */}
                  <td>
                    {article.imageUrl ? (
                      <img
                        src={article.imageUrl}
                        alt={article.title}
                        style={{
                          width: "60px",
                          height: "60px",
                          objectFit: "cover",
                          borderRadius: "6px",
                        }}
                      />
                    ) : (
                      <span className="text-muted">No image</span>
                    )}
                  </td>
                  <td>{article.title}</td>
                  <td>{article.category}</td>

                  <td>
                    {/* Delete button */}
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(article._id)}>
                      Delete
                    </button>
                    {/* Optionally, you can add Edit button here */}
                  </td>
                  <td>
                    {moment(article.createdAt).format("DD/MM/YYYY HH:mm:ss")}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ArticleList;
