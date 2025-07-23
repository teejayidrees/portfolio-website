import React, { useContext } from "react";
import { LearnContext } from "../contexts/learnContext.jsx";
import { useTheme } from "../contexts/ThemeContext.jsx";
import { Link } from "react-router-dom";

import { Col, Card, Badge, Button } from "react-bootstrap";
const SingleLearn = ({ article }) => {
  const { learnCard } = useContext(LearnContext);
  const { isDark } = useTheme();
  //Handle NavLink Clicks and scroll to the top
  const handleReadMoreClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  //   const filteredArticles = learnCard.filter((article) => {
  //     const matchesSearch =
  //       article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       article.tags.some((tag) =>
  //         tag.toLowerCase().includes(searchTerm.toLowerCase())
  //       );
  //     //selectedCategory sets default category to all if Not, let the article's category = selectedCategory
  //     const matchesCategory =
  //       selectedCategory === "all" || article.category === selectedCategory;

  //     return matchesSearch && matchesCategory;
  //   });
  return (
    <>
      <Col lg={4} md={6}>
        <Card
          className={`h-100 shadow-sm border-0 ${isDark ? "bg-secondary" : ""}`}
          style={{ transition: "transform 0.3s ease" }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "translateY(-5px)")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.transform = "translateY(0)")
          }>
          {/* Article Image */}
          <Card.Img
            variant="top"
            src={article.imageUrl}
            alt={article.title}
            style={{ height: "200px", objectFit: "cover" }}
          />

          <Card.Body className="d-flex flex-column">
            {/* Article Category Badge */}
            <Badge bg="primary" className="align-self-start mb-2 ">
              {article.category}
            </Badge>

            {/* Article Title */}
            <Card.Title className={`h5 mb-3 ${isDark ? "text-white" : ""}`}>
              {article.title}
            </Card.Title>

            {/* Article Excerpt */}
            <Card.Text
              className={`flex-grow-1 mb-2 ${isDark ? "text-white" : ""}`}>
              {article.excerpt.preamble.trim()}...
            </Card.Text>

            {/* Article Tags */}
            <div className="mb-3">
              {article.tags.map((tag) => (
                <Badge
                  key={tag}
                  bg={"success"}
                  text={isDark ? "light" : "white"}
                  className="me-1 mb-1">
                  {tag}
                </Badge>
              ))}
            </div>

            {/* Article Meta Information */}
            <div className="d-flex justify-content-between align-items-center text-muted small mb-3">
              <span className={`${isDark ? "text-white" : ""}`}>
                <i
                  className={`bi bi-person me-1 ${
                    isDark ? "text-white" : ""
                  }`}></i>
                {article.author}
              </span>
              <span className={`${isDark ? "text-white" : ""}`}>
                <i
                  className={`bi bi-clock me-1 ${
                    isDark ? "text-white" : ""
                  }`}></i>
                {article.readTime} min Read
              </span>
            </div>

            <div className="d-flex justify-content-between align-items-center">
              <small className={` ${isDark ? "text-white" : "text-muted"}`}>
                <i
                  className={`bi bi-calendar me-1 ${
                    isDark ? "text-white" : ""
                  }`}></i>
                {new Date(article.createdAt).toLocaleDateString()}
              </small>

              {/* Read More Button */}
              <Link to={`/learning/readMore/${article._id}`}>
                <Button
                  variant="outline-primary"
                  size="sm"
                  className="d-flex align-items-center"
                  onClick={handleReadMoreClick}>
                  Read More
                  <i className="bi bi-arrow-right ms-1"></i>
                </Button>
              </Link>
            </div>
          </Card.Body>
        </Card>
      </Col>
    </>
  );
};

export default SingleLearn;
