// src/components/ReadMore.jsx
import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { LearnContext } from "../contexts/learnContext";
import { useTheme } from "../contexts/ThemeContext";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";

const ReadMore = () => {
  const { id } = useParams(); // Get the article ID from the URL
  const { learnCard } = useContext(LearnContext);
  const { isDark } = useTheme();

  // Find the article with the matching ID
  const article = learnCard.find((item) => item._id.toString() === id);

  // If no article found, show error
  if (!article) {
    return (
      <Container className="py-5 mt-5">
        <Row>
          <Col>
            <Link to="/learning">
              <Button variant="outline-secondary" size="sm">
                <i className="bi bi-arrow-left me-1"></i> Back
              </Button>
            </Link>
          </Col>
          <Col className="text-center">
            <h2 className="fs-3 mb-3">Loading... <br/> Refresh after 15sec</h2>
            <p>The article you are looking for does not exist.</p>
            <Link to="/learning">
              <Button variant="primary">Back to Learning Hub</Button>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }

  return (
    <Container className="py-5 mt-5">
      <Row className="mb-4">
        <Col>
          <Link to="/learning">
            <Button variant="outline-secondary" size="sm">
              <i className="bi bi-arrow-left me-1"></i> Back
            </Button>
          </Link>
        </Col>
      </Row>

      <Row>
        <Col lg={8} className="mx-auto">
          <h1 className={`mb-3 fs-3 fw-bold${isDark ? "text-white" : ""}`}>
            {article.title}
          </h1>

          <div className="mb-3">
            <Badge bg="primary" className="me-2">
              {article.category}
            </Badge>
            <small
              className={`italic  ${isDark ? "text-white" : "text-muted"}`}
              style={{ fontSize: "15px" }}>
              By {article.author} • {article.readTime} min Read •{" "}
              {new Date(article.createdAt).toLocaleDateString()}
            </small>
          </div>

          <img
            src={article.imageUrl}
            alt={article.title}
            className="img-fluid mb-4 rounded"
          />

          <h3
            style={{ fontFamily: "'Poppins', sans-serif" }}
            className={`lead fw ${isDark ? "text-white" : ""}`}>
            {article.excerpt.preamble}
          </h3>

          {/* If you had full content, you'd display it here */}
          <p
            style={{ fontFamily: "Georgia, serif", lineHeight: 1.6 }}
            className={`${isDark ? "text-white" : ""}`}>
            {article.excerpt.passage}
          </p>

          <div className="mt-4">
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
        </Col>
      </Row>
    </Container>
  );
};

export default ReadMore;
