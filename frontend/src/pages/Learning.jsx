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
   * Mock data for blog posts/articles
   * In the future, this will be replaced with data from a CMS/backend
   */
  //  const articles = [
  //   {
  //     id: 1,
  //     title: "Getting Started with React Hooks",
  //     excerpt:
  //       "Learn the fundamentals of React Hooks and how they can simplify your component logic.",
  //     category: "React",
  //     author: "Alex Johnson",
  //     date: "2024-01-15",
  //     readTime: "5 min read",
  //     image:
  //       "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     tags: ["React", "JavaScript", "Frontend"],
  //   },
  //   {
  //     id: 2,
  //     title: "CSS Grid vs Flexbox: When to Use What",
  //     excerpt:
  //       "A comprehensive guide to understanding the differences between CSS Grid and Flexbox.",
  //     category: "CSS",
  //     author: "Alex Johnson",
  //     date: "2024-01-10",
  //     readTime: "8 min read",
  //     image:
  //       "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     tags: ["CSS", "Layout", "Design"],
  //   },
  //   {
  //     id: 3,
  //     title: "JavaScript ES6+ Features You Should Know",
  //     excerpt:
  //       "Explore modern JavaScript features that will make your code cleaner and more efficient.",
  //     category: "JavaScript",
  //     author: "Alex Johnson",
  //     date: "2024-01-05",
  //     readTime: "12 min read",
  //     image:
  //       "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     tags: ["JavaScript", "ES6", "Programming"],
  //   },
  //   {
  //     id: 4,
  //     title: "Building Responsive Websites with Bootstrap 5",
  //     excerpt:
  //       "Master the art of creating responsive, mobile-first websites using Bootstrap 5.",
  //     category: "Bootstrap",
  //     author: "Alex Johnson",
  //     date: "2024-01-01",
  //     readTime: "10 min read",
  //     image:
  //       "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     tags: ["Bootstrap", "Responsive", "CSS"],
  //   },
  //   {
  //     id: 5,
  //     title: "Introduction to Node.js and Express",
  //     excerpt:
  //       "Get started with server-side JavaScript using Node.js and the Express framework.",
  //     category: "Backend",
  //     author: "Alex Johnson",
  //     date: "2023-12-28",
  //     readTime: "15 min read",
  //     image:
  //       "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     tags: ["Node.js", "Express", "Backend"],
  //   },
  //   {
  //     id: 6,
  //     title: "Git and GitHub Best Practices",
  //     excerpt:
  //       "Learn essential Git commands and GitHub workflows for effective version control.",
  //     category: "Tools",
  //     author: "Alex Johnson",
  //     date: "2023-12-25",
  //     readTime: "7 min read",
  //     image:
  //       "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600",
  //     tags: ["Git", "GitHub", "Version Control"],
  //   },
  // ];

  // Extract unique categories for filter dropdown
  // const categories = [
  //   "all",
  //   ...new Set(articles.map((article) => article.category)),
  // ];

  /**
   * Filter articles based on search term and selected category
   * @returns {Array} Filtered array of articles
   */
  const filteredArticles = learnCard.filter((article) => {
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    //selectedCategory sets default category to all if Not, let the article's category = selectedCategory
    const matchesCategory =
      selectedCategory === "all" || article.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  /**
   * Handle search input change
   * @param {Event} e - Input change event
   */
  // const handleSearchChange = (e) => {
  //   setSearchTerm(e.target.value);
  // };

  /**
   * Handle category filter change
   * @param {Event} e - Select change event
   */
  // const handleCategoryChange = (e) => {
  //   setSelectedCategory(e.target.value);
  // };

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
