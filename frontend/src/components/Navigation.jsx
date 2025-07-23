import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useTheme } from "../contexts/ThemeContext";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const { isDark, toggleTheme } = useTheme();

  // Corrected: useState returns array, not object
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarRef = useRef(null);

  //Handle NavLink Clicks and scroll to the top
  const handleNavLinkClick = () => {
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  // Handle outside clicks
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navbarRef.current && !navbarRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    // Clean up on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Toggle menu open/close
  const handleToggle = () => setIsMenuOpen(!isMenuOpen);

  return (
    <Navbar
      ref={navbarRef}
      expanded={isMenuOpen}
      expand="lg"
      variant={isDark ? "dark" : "light"}
      bg={isDark ? "dark" : "light"}
      fixed="top"
      className="shadow-lg ">
      <Container>
        {/* Brand/Logo */}
        <LinkContainer to="/">
          <Navbar.Brand className="fw-bold fs-3">
            <i className="bi bi-code-slash me-2 text-primary"></i>
            Ahmad Idris
          </Navbar.Brand>
        </LinkContainer>

        <div className="d-flex g-2">
          {/*Theme Controller medium screen*/}
          <Button
            variant={isDark ? "outline-light" : "outline-dark"}
            size="sm"
            onClick={toggleTheme}
            className="d-flex align-items-center me-2 d-lg-none">
            <i className={`bi ${isDark ? "bi-sun" : "bi-moon"} me-1`}></i>
            {isDark ? "Light" : "Dark"}
          </Button>
          {/* Mobile toggle */}
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            className="border-2 shadow-none px-2 py-1 bg-transparent"
            onClick={handleToggle}>
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6 border-none" />
            )}
          </Navbar.Toggle>
        </div>

        {/* Collapsible content */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/">
              <Nav.Link onClick={handleNavLinkClick}>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/learning">
              <Nav.Link onClick={handleNavLinkClick}>Learning Hub</Nav.Link>
            </LinkContainer>
          </Nav>

          <div className="ms-auto d-flex align-items-center justify-content-center">
            {/*Theme Controller */}
            <Button
              variant={isDark ? "outline-light" : "outline-dark"}
              size="sm"
              onClick={toggleTheme}
              className="d-lg-flex align-items-center me-2 d-none">
              <i className={`bi ${isDark ? "bi-sun" : "bi-moon"} me-1`}></i>
              {isDark ? "Light" : "Dark"}
            </Button>
            <Nav.Link
              href="https://github.com/teejayidrees"
              target="_blank"
              className="me-2  ">
              <i className="bi bi-github fs-3"></i>
            </Nav.Link>
            <Nav.Link
              href="https://linkedin.com/in/teejayidrees"
              target="_blank"
              className="me-3 ">
              <i className="bi bi-linkedin fs-3"></i>
            </Nav.Link>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
