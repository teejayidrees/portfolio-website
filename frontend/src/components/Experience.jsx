import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeContext";

/**
 * Experience Section Component
 * - Displays work experience, education, and certifications
 * - Uses timeline layout for chronological presentation
 * - Includes achievements and key accomplishments
 */
const Experience = () => {
  // Get theme context for conditional styling
  const { isDark } = useTheme();

  /**
   * Work experience data
   */
  const workExperience = [
    {
      title: "Frontend Developer Instructor",
      company: "Analytica Haven",
      period: "2025",
      location: "Remote",
      description:
        "Developed responsive web applications using React and modern JavaScript. Collaborated with design team to implement pixel-perfect UI components.",
      achievements: [
        "Built 5+ responsive web applications",
        "Improved page load speed by 40%",
        "Collaborated with cross-functional teams",
        "Implemented modern UI/UX designs",
      ],
      type: "work",
    },
    {
      title: "Web Development Freelancer",
      company: "Self-Employed",
      period: "2023 - present",
      location: "Remote",
      description:
        "Created custom websites for small businesses and startups. Managed full project lifecycle from design to deployment.",
      achievements: [
        "Delivered 10+ client projects",
        "Maintained 100% client satisfaction",
        "Specialized in React and MERN Stack",
        "Managed project timelines and budgets",
      ],
      type: "work",
    },
  ];

  /**
   * Education data
   */
  const education = [
    {
      degree: "Bachelor of Engineering in Computer Engineering",
      school: "Federal University of Minna, Niger State",
      period: "2024 - TD",
      location: "Minna, NG",
      description:
        "I'm Currently Pursuing My B.Eng degree in the Federal University of Technology, Minna",
      gpa: "In Progress",
      type: "education",
    },
  ];

  /**
   * Certifications data
   */
  const certifications = [
    {
      name: "Data Analytics Job Simulation",
      issuer: "Deloitte",
      date: "2025",
      credentialId: "7nTXEctLj7W3gL6q",
      icon: "bi-award",
    },
    //  {
    //   name: "JavaScript Algorithms and Data Structures",
    //   issuer: "freeCodeCamp",
    //   date: "2022",
    //   credentialId: "FCC-JS-2022",
    //   icon: "bi-code-slash",
    // },
    {
      name: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2024",
      // credentialId: "FCC-RWD-2022",
      icon: "bi-phone",
    },
    {
      name: "Git and GitHub Essentials",
      issuer: "LinkedIn Learning",
      date: "2022",
      // credentialId: "LIL-GIT-2022",
      icon: "bi-git",
    },
  ];

  /**
   * Timeline Item Component
   * @param {Object} item - Timeline item data
   * @param {number} index - Item index
   * @param {string} type - Item type (work/education)
   */
  const TimelineItem = ({ item, index, type }) => (
    <div className="d-flex mb-4">
      {/* Timeline Icon */}
      <div className="flex-shrink-0 me-4">
        <div
          className={`bg-${
            type === "work" ? "primary" : "success"
          } text-white rounded-circle d-flex align-items-center justify-content-center`}
          style={{ width: "50px", height: "50px" }}>
          <i
            className={`bi ${
              type === "work" ? "bi-briefcase" : "bi-mortarboard"
            } fs-5`}></i>
        </div>
      </div>

      {/* Timeline Content */}
      <div className="flex-grow-1">
        <Card
          className={`border-0 shadow-sm ${
            isDark ? "bg-dark text-light" : "bg-white"
          }`}>
          <Card.Body className="p-4">
            <div className="d-flex justify-content-between align-items-start mb-3">
              <div>
                <h5 className="fw-bold mb-1">{item.title || item.degree}</h5>
                <p className="text-primary fw-medium mb-1">
                  {item.company || item.school}
                </p>
                <small className={` ${isDark ? "text-light" : " text-muted"}`}>
                  <i className="bi bi-geo-alt me-1"></i>
                  {item.location}
                </small>
              </div>
              <Badge bg={type === "work" ? "primary" : "success"}>
                {item.period}
              </Badge>
            </div>

            <p className="mb-3">{item.description}</p>

            {item.achievements && (
              <div className="mb-3">
                <h6 className="fw-bold mb-2">Key Achievements:</h6>
                <ul className="list-unstyled">
                  {item.achievements.map((achievement, achievementIndex) => (
                    <li
                      key={achievementIndex}
                      className="d-flex align-items-center mb-1">
                      <i className="bi bi-check-circle-fill text-success me-2"></i>
                      <small>{achievement}</small>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {item.gpa && (
              <div className="text-end">
                <Badge bg="info">{item.gpa}</Badge>
              </div>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );

  return (
    <section
      id="experience"
      className={`py-5 ${isDark ? "bg-dark" : "bg-white"}`}>
      <Container className="py-5">
        {/* Section Header */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-5 fw-bold mb-3">
              <i className="bi bi-clock-history text-primary me-3"></i>
              Experience & Education
            </h2>
            <p className="lead">
              My professional journey and educational background in web
              development
            </p>
          </Col>
        </Row>

        <Row className="g-5">
          {/* Work Experience */}
          <Col lg={6}>
            <div className="mb-4">
              <h3 className="h4 fw-bold d-flex align-items-center mb-4">
                <i className="bi bi-briefcase text-primary me-3"></i>
                Work Experience
              </h3>
            </div>

            {workExperience.map((job, index) => (
              <TimelineItem key={index} item={job} index={index} type="work" />
            ))}
          </Col>

          {/* Education */}
          <Col lg={6}>
            <div className="mb-4">
              <h3 className="h4 fw-bold d-flex align-items-center mb-4">
                <i className="bi bi-mortarboard text-success me-3"></i>
                Education
              </h3>
            </div>

            {education.map((edu, index) => (
              <TimelineItem
                key={index}
                item={edu}
                index={index}
                type="education"
              />
            ))}

            {/* Certifications */}
            <div className="mt-5">
              <h4 className="fw-bold d-flex align-items-center mb-4">
                <i className="bi bi-award text-warning me-3"></i>
                Certifications
              </h4>

              <Row className="g-3">
                {certifications.map((cert, index) => (
                  <Col sm={6} key={index}>
                    <Card
                      className={`border-0 shadow-sm h-100 ${
                        isDark ? "bg-secondary text-light" : "bg-light"
                      }`}>
                      <Card.Body className="p-3">
                        <div className="d-flex align-items-start">
                          <i
                            className={`${cert.icon} text-warning me-3 mt-1`}></i>
                          <div className="flex-grow-1">
                            <h6 className="fw-bold mb-1">{cert.name}</h6>
                            <p className="text-primary small mb-1">
                              {cert.issuer}
                            </p>
                            <div className="d-flex justify-content-between align-items-center">
                              <small
                                className={`${
                                  isDark ? "text-white" : "text-muted"
                                }`}>
                                {cert.date}
                              </small>
                              <Badge bg="warning" text="dark">
                                Certified
                              </Badge>
                            </div>
                            <small
                              className={`d-block mt-1 ${
                                isDark ? "text-white" : "text-muted"
                              }`}>
                              {cert.credentialId}
                            </small>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Experience;
