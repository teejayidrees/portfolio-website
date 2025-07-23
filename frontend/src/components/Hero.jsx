import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeContext";
import profilePic from "../media/profilePic.jpg";
import Resume from "../media/myResume.pdf";

/**
 * Hero Section Component
 * - Main landing section with introduction and call-to-action
 * - Features animated typing effect and gradient backgrounds
 * - Responsive design with different layouts for mobile and desktop
 */
const Hero = () => {
  // Get theme context for conditional styling
  const { isDark } = useTheme();

  /**
   * Scroll to a specific section on the page
   * @param {string} sectionId - The ID of the section to scroll to
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "myResume.pdf";
    link.click();
  };

  return (
    <section
      id="hero"
      className={`hero-section min-vh-100 d-flex align-items-center position-relative ${
        isDark ? "bg-dark" : "bg-light"
      }`}
      style={{
        paddingTop: "80px", // Account for fixed navbar
        background: isDark
          ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)"
          : "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
      }}>
      <Container>
        <Row className="align-items-center min-vh-100">
          {/* Left Column - Text Content */}
          <Col lg={6} className="text-center text-lg-start">
            {/* Greeting and Introduction */}
            <div className="mb-4">
              <h1 className="display-4 fw-bold mb-3">
                <span className={isDark ? "text-light" : "text-white"}>
                  Hi, I'm{" "}
                </span>
                <span
                  className="text-warning"
                  style={{
                    background: "linear-gradient(45deg, #ffd700, #ffed4e)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                  Ahmad Idris
                </span>
              </h1>

              {/* Animated Role Description */}
              <h2 className={`h3 mb-4 ${isDark ? "text-info" : "text-white"}`}>
                <i className="bi bi-code-slash me-2"></i>
                Junior Web Developer
              </h2>
            </div>

            {/* Description Paragraph */}
            <p className={`lead mb-4 ${isDark ? "text-light" : "text-white"}`}>
              Passionate about creating beautiful, functional web applications
              using modern technologies. I love turning complex problems into
              simple, elegant solutions.
            </p>

            {/* Status Indicators */}
            <div className="mb-4">
              <div className="d-flex flex-wrap justify-content-center justify-content-lg-start gap-3">
                <div className="d-flex align-items-center">
                  <i className="bi bi-geo-alt text-warning me-2"></i>
                  <span className={isDark ? "text-light" : "text-white"}>
                    Minna, NG
                  </span>
                </div>
                <div className="d-flex align-items-center">
                  <div
                    className="rounded-circle  me-2"
                    style={{
                      width: "8px",
                      height: "8px",
                      backgroundColor: "green",
                    }}></div>
                  <span className={isDark ? "text-light" : "text-white"}>
                    Available for work
                  </span>
                </div>
              </div>
            </div>

            {/* Call-to-Action Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center justify-content-lg-start">
              <Button
                variant="warning"
                size="lg"
                onClick={() => scrollToSection("projects")}
                className="fw-semibold">
                <i className="bi bi-eye me-2"></i>
                View My Work
              </Button>

              <Button
                variant={isDark ? "outline-light" : "outline-light"}
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="fw-semibold">
                <i className="bi bi-envelope me-2"></i>
                Get In Touch
              </Button>
              <Button variant="success" size="md" onClick={handleDownload}>
                My Resume
              </Button>
            </div>

            {/* Social Links */}
            <div className="mt-4">
              <div className="d-flex justify-content-center justify-content-lg-start gap-3">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-outline-${
                    isDark ? "light" : "light"
                  } btn-sm rounded-circle`}
                  style={{ width: "40px", height: "40px" }}>
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`btn btn-outline-${
                    isDark ? "light" : "light"
                  } btn-sm rounded-circle`}
                  style={{ width: "40px", height: "40px" }}>
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="mailto:alex@example.com"
                  className={`btn btn-outline-${
                    isDark ? "light" : "light"
                  } btn-sm rounded-circle`}
                  style={{ width: "40px", height: "40px" }}>
                  <i className="bi bi-envelope"></i>
                </a>
              </div>
            </div>
          </Col>

          {/* Right Column - Profile Image and Visual Elements */}
          <Col lg={6} className="text-center mt-5 mt-lg-0">
            <div className="position-relative">
              {/* Main Profile Image */}
              <div
                className="mx-auto rounded-circle overflow-hidden shadow-lg"
                style={{
                  width: "300px",
                  height: "300px",
                  border: "4px solid rgba(255, 255, 255, 0.3)",
                }}>
                <img
                  src={profilePic}
                  alt="Alex Johnson - Junior Web Developer"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>

              {/* Floating Tech Icons */}
              <div className="position-absolute top-0 start-0 animate__animated animate__fadeInLeft">
                <div
                  className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center shadow"
                  style={{ width: "50px", height: "50px" }}>
                  <i className="bi bi-filetype-js fs-5"></i>
                </div>
              </div>

              <div className="position-absolute top-0 end-0 animate__animated animate__fadeInRight">
                <div
                  className="bg-info text-white rounded-circle d-flex align-items-center justify-content-center shadow"
                  style={{ width: "50px", height: "50px" }}>
                  <i className="bi bi-bootstrap fs-5"></i>
                </div>
              </div>

              <div className="position-absolute bottom-0 start-0 animate__animated animate__fadeInUp">
                <div
                  className="bg-success text-white rounded-circle d-flex align-items-center justify-content-center shadow"
                  style={{ width: "50px", height: "50px" }}>
                  <i className="bi bi-git fs-5"></i>
                </div>
              </div>

              <div className="position-absolute bottom-0 end-0 animate__animated animate__fadeInUp">
                <div
                  className="bg-danger text-white rounded-circle d-flex align-items-center justify-content-center shadow"
                  style={{ width: "50px", height: "50px" }}>
                  <i className="bi bi-code-square fs-5"></i>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        {/* Scroll Down Indicator */}
        <div className="position-absolute bottom-0 start-10 translate-middle-x mb-4">
          <Button
            variant="link"
            onClick={() => scrollToSection("about")}
            className={`text-${
              isDark ? "light" : "white"
            } text-decoration-none animate__animated animate__bounce animate__infinite`}>
            <i className="bi bi-chevron-down fs-3"></i>
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
