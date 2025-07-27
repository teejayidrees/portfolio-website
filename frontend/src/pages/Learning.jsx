import React, { useContext, useState } from "react";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeContext";
import { LearnContext } from "../contexts/learnContext.jsx";
import SingleLearn from "../components/singleLearn.jsx";
import { Link } from "react-router-dom";

/**
 * Learning Page Component
 * - Blog/news style page for coding tutorials and articles
 * - Designed to be easily integrated with a CMS in the future
 * - Includes search functionality and category filtering
 * - Responsive grid layout for article cards
 */
const Learning = () => {
  const {
    learnCard,
    selectedCategory,
    searchTerm,
    categories,
    handleCategoryChange,
    handleSearchChange,
  } = useContext(LearnContext);
  // Get theme context for consistent styling
  const { isDark } = useTheme();
  /**
   * Filter articles based on search term and selected category
   * @returns {Array} Filtered array of articles
   */
  const filteredArticles = learnCard.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.preamble
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      ) ||
      article.excerpt.passage.toLowerCase().includes(searchTerm.toLowerCase());

    //selectedCategory sets default category to all if Not, let the article's category = selectedCategory
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });



  return (
    <div className={`learning-page pt-5 ${isDark ? "bg-dark" : "bg-light"}`}>
      <Container className="py-5">
        {/* Page Header Section */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h1 className="display-4 fw-bold mb-3">
              <i className="bi bi-book text-primary me-3"></i>
              Learning Hub
            </h1>
            <p className="lead mb-4">
              Explore coding tutorials, best practices, and insights from my
              development journey. This space is dedicated to sharing knowledge
              and helping fellow developers grow.
            </p>

            {/* Search and Filter Section */}
            <Row className="g-3 justify-content-center">
              <Col md={6}>
                <InputGroup>
                  <InputGroup.Text>
                    <i className="bi bi-search"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type="text"
                    placeholder="Search articles..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                  />
                </InputGroup>
              </Col>
              <Col md={3}>
                <Form.Select
                  value={selectedCategory}
                  onChange={handleCategoryChange}>
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category === "all" ? "All Categories(Latest)" : category}
                    </option>
                  ))}
                </Form.Select>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <h1 className="italic d-flex text-center fs-2 fw-bold pb-3 align-items-center justify-content-center pt-0 mt-0 ">
            Recent
          </h1>
        </Row>
        {/* Articles Grid Section */}
        <Row className="g-4">
          {learnCard.length > 0 ? (
            filteredArticles.map((article) => (
              <SingleLearn key={article._id} article={article} />
            ))
          ) : (
            /* No Results Message */
            <Col lg={8} className="mx-auto text-center">
              <div className="py-5">
                <i className="bi bi-search display-1 text-muted mb-3"></i>
                <h3>No articles found</h3>
                <p className={`text-muted ${isDark ? "text-white" : ""}`}>
                  Try adjusting your search terms or category filter.
                </p>
              </div>
            </Col>
          )}
        </Row>

        {/* Call to Action Section */}
        <Row className="mt-5 pt-5 border-top">
          <Col lg={8} className="mx-auto text-center">
            <h3 className="mb-3">Want to suggest a topic?</h3>
            <p className="mb-4">
              Have a coding topic you'd like me to cover? I'm always looking for
              new ideas and ways to help the developer community.
            </p>
            <Link to="/#contact">
              <Button
                variant="primary"
                size="lg"
                href="http://localhost:5176/#contact">
                <i className="bi bi-envelope me-2"></i>
                Suggest a Topic
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Learning;
