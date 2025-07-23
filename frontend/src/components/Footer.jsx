import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeContext";

/**
 * Footer Component
 * - Site footer with brand information, links, and social media
 * - Includes scroll-to-top functionality
 * - Responsive design with different layouts for mobile and desktop
 */
const Footer = () => {
  // Get theme context for conditional styling
  const { isDark } = useTheme();

  /**
   * Scroll to top of page smoothly
   */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /**
   * Scroll to specific section
   * @param {string} sectionId - ID of section to scroll to
   */
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Get current year for copyright
  const currentYear = new Date().getFullYear();

  /**
   * Quick navigation links
   */
  const quickLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Experience", id: "experience" },
    { label: "Contact", id: "contact" },
  ];
  /**
   * Contact information data
   */
  const contactInfo = [
    {
      icon: "bi-envelope",
      label: "Email",
      value: "ahmadgbodoti@gmail.com",
      href: "mailto:ahmadgbodoti@gmail.com",
    },
    {
      icon: "bi-telephone",
      label: "Phone",
      value: "+234 (903) 032-2692",
      href: "tel:+2349030322692",
    },
    {
      icon: "bi-geo-alt",
      label: "Location",
      value: "Minna, NG",
      href: "google.map",
    },
  ];
  /**
   * Social media links
   */
  const socialLinks = [
    {
      icon: "bi-github",
      href: "https://github.com/teejayidrees",
      label: "GitHub",
    },
    {
      icon: "bi-linkedin",
      href: "https://linkedin.com/in/teejayidrees",
      label: "LinkedIn",
    },
    {
      icon: "bi-twitter",
      href: "https://twitter.com/teejayidrees",
      label: "Twitter",
    },
    { icon: "bi-envelope", href: "mailto:ahmadgbodoti", label: "Email" },
    ,
    {
      icon: "bi-whatsapp",
      href: "https://wa.me/+2349030322692",
      label: "WhatsApp",
    },
  ];

  return (
    <footer
      className={`py-5 border-top ${
        isDark ? "bg-dark border-secondary" : "bg-white border-light"
      }`}>
      <Container>
        <Row className="g-4">
          {/* Brand Section */}
          <Col lg={4} md={6}>
            <div className="mb-4">
              <h5 className="fw-bold d-flex align-items-center mb-3">
                <i className="bi bi-code-slash text-primary me-2"></i>
                Ahmad Idris
              </h5>
              <p className="mb-4">
                Junior Web Developer passionate about creating beautiful,
                functional web experiences. Always learning, always growing.
              </p>

              {/* Social Links */}
              <div className="d-flex gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`btn btn-outline-${
                      isDark ? "light" : "dark"
                    } btn-sm rounded-circle`}
                    style={{ width: "40px", height: "40px" }}
                    title={social.label}>
                    <i className={`${social.icon} fs-6`}></i>
                  </a>
                ))}
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>
            <h6 className="fw-bold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              {quickLinks.map((link, index) => (
                <li key={index} className="mb-2">
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className={`btn btn-link p-0 text-start text-decoration-none ${
                      isDark ? "text-light" : "text-dark"
                    }`}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </Col>

          {/* Services */}
          <Col lg={3} md={6}>
            <h6 className="fw-bold mb-3">Services</h6>
            <ul className="list-unstyled">
              <li className="mb-2">
                <span className={`${isDark ? "text-white" : "text-muted"}`}>
                  Web Development
                </span>
              </li>
              <li className="mb-2">
                <span className={`${isDark ? "text-white" : "text-muted"}`}>
                  Frontend Development
                </span>
              </li>
              <li className="mb-2">
                <span className={`${isDark ? "text-white" : "text-muted"}`}>
                  MERN Stack Web App
                </span>
              </li>
              <li className="mb-2">
                <span className={`${isDark ? "text-white" : "text-muted"}`}>
                  Responsive Design
                </span>
              </li>
              <li className="mb-2">
                <span className={`${isDark ? "text-white" : "text-muted"}`}>
                  Website Maintenance
                </span>
              </li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col lg={3} md={6}>
            <h6 className="fw-bold mb-3">Get in Touch</h6>
            {contactInfo.map((contact, index) => (
              <div className="mb-3" key={index}>
                <div className="d-flex align-items-center mb-2">
                  <i className={`bi ${contact.icon} text-primary me-2`}></i>
                  <small>
                    <a
                      href={contact.href}
                      className="btn btn-link p-0 text-start text-decoration-none btn-outline-yellow">
                      {contact.value}
                    </a>
                  </small>
                </div>
              </div>
            ))}

            {/* Availability Status */}
            <div
              className={`p-3 rounded-3 ${
                isDark ? "bg-success bg-opacity-10" : "bg-success bg-opacity-10"
              }`}>
              <div className="d-flex align-items-center">
                <div
                  className="bg-success rounded-circle me-2"
                  style={{ width: "8px", height: "8px" }}></div>
                <small className="text-success fw-medium">
                  Available for work
                </small>
              </div>
            </div>
          </Col>
        </Row>

        {/* Bottom Section */}
        <hr
          className={`my-4 ${isDark ? "border-secondary" : "border-light"}`}
        />

        <Row className="align-items-center">
          <Col md={6}>
            <div
              className={`d-flex align-items-center justify-content-center ${
                isDark ? "text-white" : "text-muted"
              }`}>
              <span>
                © {currentYear} Ahmad Idris. Made with
                <i className="bi bi-heart-fill text-danger mx-2"></i>
                and lots of coffee
              </span>
            </div>
          </Col>

          <Col md={6} className="text-md-end mt-3 mt-md-0">
            <Button
              variant={isDark ? "outline-light" : "outline-dark"}
              size="sm"
              onClick={scrollToTop}
              className="d-flex align-items-center">
              <i className="bi bi-arrow-up me-1"></i>
              Back to Top
            </Button>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
