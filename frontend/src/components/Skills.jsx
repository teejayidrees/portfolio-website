import React from "react";
import { Container, Row, Col, Card, Badge, ProgressBar } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeContext";

/**
 * Skills Section Component
 * - Displays technical skills organized by categories
 * - Shows proficiency levels with progress bars
 * - Includes currently learning technologies
 */
const Skills = () => {
  // Get theme context for conditional styling
  const { isDark } = useTheme();

  /**
   * Skill categories with associated technologies and proficiency levels
   */
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: "bi-code-slash",
      color: "primary",
      skills: [
        { name: "HTML/CSS", level: 96 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 80 },
        { name: "Bootstrap", level: 85 },
        { name: "TypeScript", level: 50 },
      ],
    },
    {
      title: "Design & UI/UX",
      icon: "bi-palette",
      color: "info",
      skills: [
        { name: "Figma", level: 55 },
        { name: "Adobe XD", level: 60 },
        { name: "Responsive Design", level: 90 },
        { name: "User Experience", level: 80 },
        { name: "Prototyping", level: 75 },
      ],
    },
    {
      title: "Backend & Database",
      icon: "bi-server",
      color: "success",
      skills: [
        { name: "Node.js", level: 65 },
        { name: "Express.js", level: 65 },
        { name: "MongoDB", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "Firebase", level: 55 },
      ],
    },
    {
      title: "Tools & Others",
      icon: "bi-tools",
      color: "warning",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "VS Code", level: 95 },
        { name: "Webpack", level: 60 },
        { name: "npm/yarn", level: 80 },
        { name: "Chrome DevTools", level: 85 },
      ],
    },
  ];

  /**
   * Technologies currently being learned
   */
  const currentlyLearning = [
    { name: "Next.js", category: "Frontend Framework" },
    { name: "GraphQL", category: "API Technology" },
    { name: "Docker", category: "DevOps" },
    { name: "AWS", category: "Cloud Services" },
    { name: "React Native", category: "Mobile Development" },
  ];

  /**
   * Additional skills and competencies
   */
  const additionalSkills = [
    "Responsive Web Design",
    "Cross-browser Compatibility",
    "Performance Optimization",
    "SEO Best Practices",
    "Agile Methodology",
    "Version Control",
    "Testing & Debugging",
    "API Integration",
  ];

  return (
    <section id="skills" className={`py-5 ${isDark ? "bg-dark" : "bg-white"}`}>
      <Container className="py-5">
        {/* Section Header */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-5 fw-bold mb-3">
              <i className="bi bi-gear text-primary me-3"></i>
              Skills & Technologies
            </h2>
            <p className="lead">
              Here are the technologies and tools I work with to bring ideas to
              life
            </p>
          </Col>
        </Row>

        {/* Main Skills Grid */}
        <Row className="g-4 mb-5">
          {skillCategories.map((category, index) => (
            <Col lg={6} key={index}>
              <Card
                className={`h-100 border-0 shadow-sm ${
                  isDark ? "bg-secondary text-light" : "bg-light"
                }`}>
                <Card.Body className="p-4">
                  {/* Category Header */}
                  <div className="d-flex align-items-center mb-4">
                    <div
                      className={`bg-${category.color} text-white rounded-3 d-flex align-items-center justify-content-center me-3`}
                      style={{ width: "50px", height: "50px" }}>
                      <i className={`${category.icon} fs-4`}></i>
                    </div>
                    <h4 className="fw-bold mb-0">{category.title}</h4>
                  </div>

                  {/* Skills List with Progress Bars */}
                  <div className="space-y-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="mb-3">
                        <div className="d-flex justify-content-between mb-1">
                          <span className="fw-medium">{skill.name}</span>
                          <span
                            className={`${
                              isDark ? "text-white" : "text-muted"
                            } small `}>
                            {skill.level}%
                          </span>
                        </div>
                        <ProgressBar
                          variant={category.color}
                          now={skill.level}
                          className="progress-sm"
                          style={{ height: "6px" }}
                        />
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Additional Skills and Currently Learning */}
        <Row className="g-4">
          {/* Additional Skills */}
          <Col lg={6}>
            <Card
              className={`h-100 border-0 shadow-sm ${
                isDark ? "bg-secondary text-light" : "bg-light"
              }`}>
              <Card.Body className="p-4">
                <h4 className="fw-bold mb-4">
                  <i className="bi bi-plus-circle text-success me-2"></i>
                  Additional Skills
                </h4>
                <Row className="g-2">
                  {additionalSkills.map((skill, index) => (
                    <Col sm={6} key={index}>
                      <div className="d-flex align-items-center mb-2">
                        <i className="bi bi-check-circle-fill text-success me-2"></i>
                        <span className="small">{skill}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Card.Body>
            </Card>
          </Col>

          {/* Currently Learning */}
          <Col lg={6}>
            <Card
              className={`h-100 border-0 shadow-sm ${
                isDark ? "bg-secondary text-light" : "bg-light"
              }`}>
              <Card.Body className="p-4">
                <h4 className="fw-bold mb-4">
                  <i className="bi bi-book text-warning me-2"></i>
                  Currently Learning
                </h4>
                <div className="space-y-3">
                  {currentlyLearning.map((item, index) => (
                    <div
                      key={index}
                      className="d-flex align-items-center justify-content-between mb-3">
                      <div className="d-flex align-items-center">
                        <div
                          className="bg-warning rounded-circle me-3"
                          style={{ width: "8px", height: "8px" }}></div>
                        <div>
                          <div className="fw-medium">{item.name}</div>
                          <small
                            className={`${
                              isDark ? "text-white" : "text-muted"
                            }`}>
                            {item.category}
                          </small>
                        </div>
                      </div>
                      <Badge bg="warning" text="dark">
                        Learning
                      </Badge>
                    </div>
                  ))}
                </div>

                {/* Learning Note */}
                <div
                  className={`mt-4 p-3 rounded-3 ${
                    isDark ? "bg-dark" : "bg-warning bg-opacity-10"
                  }`}>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-lightbulb text-warning me-2"></i>
                    <small className="text-warning fw-medium">
                      Always expanding my knowledge and staying up-to-date with
                      the latest technologies!
                    </small>
                  </div>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
