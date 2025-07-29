import React from "react";
import { Container, Row, Col, Card, ProgressBar } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";
/**
 * About Section Component
 * - Personal information and background
 * - Statistics and achievements
 * - Personal interests and strengths
 */
const About = () => {
  // Get theme context for conditional styling
  const { isDark } = useTheme();

  /**
   * Statistics data for achievements display
   */
  const stats = [
    {
      icon: "bi-code-slash",
      label: "Projects Completed",
      value: "5+",
      color: "primary",
    },
    {
      icon: "bi-cup-hot",
      label: "Cups of Coffee",
      value: "10+",
      color: "warning",
    },
    { icon: "bi-people", label: "Happy Clients", value: "8", color: "success" },
    { icon: "bi-award", label: "Certifications", value: "3", color: "info" },
  ];

  /**
   * Personal strengths/skills list
   */
  const strengths = [
    "Problem Solving",
    "Team Collaboration",
    "Quick Learning",
    "Attention to Detail",
    "Creative Thinking",
    "Time Management",
  ];
  const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <section id="about" className={`py-5 ${isDark ? "bg-dark" : "bg-light"}`}>
      <Container className="py-5">
        {/* Section Header */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-5 fw-bold mb-3">
              <i className="bi bi-person text-primary me-3"></i>
              About Me
            </h2>
            <p className="lead">
              Get to know more about who I am, what I do, and what drives my
              passion for web development
            </p>
          </Col>
        </Row>

        <Row className="g-5 align-items-center">
          {/* Left Column - Image and Stats */}
          <Col lg={6}>
            {/* Profile Image */}
            <div className="text-center mb-4">
              <img
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=500"
                alt="About Alex Johnson"
                className="img-fluid rounded-3 shadow-lg"
                style={{ maxHeight: "400px", objectFit: "cover" }}
              />
            </div>

            {/* Statistics Grid */}
            <Row className="g-3">
              {stats.map((stat, index) => (
                <Col sm={6} key={index}>
                  <Card
                    className={`text-center border-0 shadow-sm h-100 ${
                      isDark ? "bg-dark text-light" : "bg-white"
                    }`}>
                    <Card.Body className="py-4">
                      <i
                        className={`${stat.icon} text-${stat.color} fs-1 mb-3`}></i>
                      <h4 className="fw-bold mb-1">{stat.value}</h4>
                      <p
                        className={`small mb-0 ${
                          isDark ? "text-white" : "text-muted "
                        }`}>
                        {stat.label}
                      </p>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>

          {/* Right Column - Content */}
          <Col lg={6}>
            <div className="ps-lg-4">
              {/* Main Description */}
              <h3 className="h4 fw-bold mb-4">
                I'm a Junior Web Developer passionate about creating amazing
                digital experiences
              </h3>

              <div className="mb-4">
                <p className="mb-3">
                  My journey into web development started during my computer
                  science studies, where I discovered my passion for creating
                  user-friendly and visually appealing web applications. I love
                  the challenge of turning complex problems into simple,
                  beautiful solutions.
                </p>

                <p className="mb-3">
                  I specialize in frontend development with React and modern
                  JavaScript, but I'm always eager to learn new technologies and
                  expand my skill set. I believe in writing clean, modular
                  maintainable code and following best practices.
                </p>

                <p className="mb-4">
                  When I'm not coding, you can find me exploring new design
                  trends, contributing to open-source projects, or learning
                  about the latest web technologies. I'm excited about the
                  future of web development and eager to contribute to
                  innovative projects.
                </p>
                
                 <p className="mb-3 btn btn-primary">
                  I post valuable content about web development daily <br />
                  Check it out
                  <button
                    className="list-unstyled border m-2 px-2"
                    style={{ borderRadius: "10px" }}
                     onClick={scrollToTop}>
                    <Link
                      style={{ textDecoration: "none", color: "green" }}
                      to="/learning">
                      Click Me
                    </Link>
                  </button>
                </p>
              </div>

              {/* Key Strengths */}
              <div className="mb-4">
                <h5 className="fw-bold mb-3">Key Strengths</h5>
                <Row className="g-2">
                  {strengths.map((strength, index) => (
                    <Col sm={6} key={index}>
                      <div className="d-flex align-items-center">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span>{strength}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </div>

              {/* Experience Progress */}
              <div className="mb-4">
                <h5 className="fw-bold mb-3">Experience Level</h5>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Frontend Development</span>
                    <span>85%</span>
                  </div>
                  {/* progress bar from react bootstrap now attribute simulates percentage*/}
                  <ProgressBar variant="primary" now={85} />
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Problem Solving</span>
                    <span>90%</span>
                  </div>
                  <ProgressBar variant="success" now={90} />
                </div>
                <div className="mb-3">
                  <div className="d-flex justify-content-between mb-1">
                    <span>Team Collaboration</span>
                    <span>88%</span>
                  </div>
                  <ProgressBar variant="info" now={88} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
