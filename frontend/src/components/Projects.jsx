import React, { useState } from "react";
import { Container, Row, Col, Card, Badge, Button, Nav } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeContext";
import BeatPic from "../media/beatSelling.png";
import CodedRatips from "../media/coded-ratips.png";
import Quiz from "../media/quiz.png"
import NewsHubPic from "../media/news-app.png";

/**
 * Projects Section Component
 * - Displays portfolio projects with filtering capabilities
 * - Features a highlighted project and grid of other projects
 * - Includes project details, technologies used, and links
 */
const Projects = () => {
  // Get theme context for conditional styling
  const { isDark } = useTheme();

  // State for project category filtering
  const [activeFilter, setActiveFilter] = useState("all");

  /**
   * Portfolio projects data
   * In a real application, this would come from a CMS or API
   */
  const projects = [
  {
  id: 2,
  title: "Naija NewsHub – Real-Time News Aggregator",
  description:
    "A responsive news platform built with Next.js and NewsAPI, delivering real-time Nigerian and global headlines. Features dynamic routing, clean UI, and AI-assisted development for faster build and deployment. Designed to keep users informed with a simple, intuitive experience.",
  image: NewsHubPic,
  technologies: ["Next.js", "TypeScript", "Tailwind CSS", "NewsAPI", "Vercel", "AI"],
  category: "web",
  featured: false,
  liveUrl: "https://aheee-news-app.vercel.app",
  githubUrl: "https://github.com/teejayidrees/news-app",
  status: "Completed",
},

    
    {
      id: 2,
      title: "Quiz/Exam App",
      description:
               "A full-stack web based application used for taking Quizes, Exam, Tests and many more. it has an Admin Route which allows the examiner to set the pre-requisite of the test, then users can then take tests in their dashboards after signing up. It also has anti-cheat system which auto submits the test when user minimizes the tab, refreshes or exits the site during the test",
      image: Quiz,      
      technologies: ["NextJs", "TailwindCSS", "MongoDB"],
      category: "web",
      featured: false,
      liveUrl: "https://aheee-quiz-app.vercel.app",
      githubUrl: "#",
      status: "Completed",
    },
    {
  id: 3,
  title: "Coded Ratips (A Number Guessing Game)",
  description:
    "An interactive number guessing game that challenges players' IQ, logic, and critical thinking. Players can compete across different levels, track their progress, and climb the leaderboard while unlocking new challenges.",
  image: CodedRatips,
  technologies: ["React", "Next.js", "MongoDB", "Node.js", "TailwindCSS"],
  category: "web",
  featured: true,
  liveUrl: "https://coded-ratips.vercel.app",
  githubUrl: "https://coded-ratips.vercel.app",
  status: "Completed"
},

  ];

  /**
   * Filter categories for project filtering
   */
  const filters = [
    { id: "all", label: "All Projects", icon: "bi-grid" },
    { id: "web", label: "Web Apps", icon: "bi-globe" },
    { id: "mobile", label: "Mobile", icon: "bi-phone" },
    { id: "design", label: "Design", icon: "bi-palette" },
  ];

  /**
   * Filter projects based on selected category
   */
  //save filteredProjects as the active one selected
  //if active filter = all, display all projects. else, filter projects based on their category and set it back to active filter
  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  /**
   * Get the featured project
   */
  const featuredProject = projects.find((project) => project.featured);

  /**
   * Handle filter change
   * @param {string} filterId - The filter category ID
   */
  const handleFilterChange = (filterId) => {
    setActiveFilter(filterId);
  };

  /**
   * Get status badge variant based on project status
   * @param {string} status - Project status
   * @returns {string} Bootstrap variant
   */
  const getStatusVariant = (status) => {
    switch (status) {
      case "Completed":
        return "success";
      case "In Progress":
        return "warning";
      default:
        return "secondary";
    }
  };

  return (
    <section
      id="projects"
      className={`py-5 ${isDark ? "bg-dark" : "bg-light"}`}>
      <Container className="py-5">
        {/* Section Header */}
        <Row className="mb-5">
          <Col lg={8} className="mx-auto text-center">
            <h2 className="display-5 fw-bold mb-3">
              <i className="bi bi-briefcase text-primary me-3"></i>
              Featured Projects
            </h2>
            <p className="lead">
              Here are some of my recent projects that showcase my skills and
              experience
            </p>
          </Col>
        </Row>

        {/* Featured Project */}
        {featuredProject && (
          <Row className="mb-5">
            <Col>
              <Card
                className={`border-0 shadow-lg ${
                  isDark ? "bg-dark text-light" : "bg-white"
                }`}
                style={{
                  background: isDark
                    ? "linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)"
                    : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                }}>
                <Card.Body className="p-5">
                  <Row className="align-items-center">
                    <Col lg={6}>
                      <Badge bg="warning" className="mb-3">
                        Featured Project
                      </Badge>
                      <h3 className="fw-bold mb-3 text-white">
                        {featuredProject.title}
                      </h3>
                      <p className="mb-4 text-white">
                        {featuredProject.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-4">
                        {featuredProject.technologies.map((tech, index) => (
                          <Badge
                            key={index}
                            bg={isDark ? "secondary" : "light"}
                            text={isDark ? "light" : "dark"}
                            className="me-2 mb-2">
                            {tech}
                          </Badge>
                        ))}
                      </div>

                      {/* Action Buttons */}
                      <div className="d-flex gap-3">
                        <Button
                          variant="warning"
                          href={featuredProject.liveUrl}>
                          <i className="bi bi-eye me-2"></i>
                          Live Demo
                        </Button>
                        <Button
                          variant="outline-light"
                          href={featuredProject.githubUrl}>
                          <i className="bi bi-github me-2"></i>
                          View Code
                        </Button>
                      </div>
                    </Col>

                    <Col lg={6} className="mt-4 mt-lg-0">
                      <img
                        src={featuredProject.image}
                        alt={featuredProject.title}
                        className="img-fluid rounded-3 shadow"
                      />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        )}

        {/* Filter Navigation */}
        <Row className="mb-4">
          <Col>
            <Nav variant="pills" className="justify-content-center">
              {filters.map((filter) => (
                <Nav.Item key={filter.id}>
                  <Nav.Link
                    active={activeFilter === filter.id}
                    onClick={() => handleFilterChange(filter.id)}
                    className="d-flex align-items-center">
                    <i className={`${filter.icon} me-2`}></i>
                    {filter.label}
                  </Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
          </Col>
        </Row>

        {/* Projects Grid */}
        <Row className="g-4">
          {filteredProjects
            .filter((project) => !project.featured)
            .map((project) => (
              <Col lg={4} md={6} key={project.id}>
                <Card
                  className={`h-100 border-0 shadow-sm project-card ${
                    isDark ? "bg-dark text-light" : "bg-white"
                  }`}
                  style={{ transition: "transform 0.3s ease" }}>
                  {/* Project Image */}
                  <div className="position-relative overflow-hidden">
                    <Card.Img
                      variant="top"
                      src={project.image}
                      alt={project.title}
                      style={{ height: "200px", objectFit: "cover" }}
                    />

                    {/* Overlay with Action Buttons */}
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center opacity-0 project-overlay"
                      style={{
                        background: "rgba(0,0,0,0.8)",
                        transition: "opacity 0.3s ease",
                      }}>
                      <div className="d-flex gap-2">
                        <Button
                          variant="warning"
                          size="sm"
                          href={project.liveUrl}>
                          <i className="bi bi-eye"></i>
                        </Button>
                        <Button
                          variant="outline-light"
                          size="sm"
                          href={project.githubUrl}>
                          <i className="bi bi-github"></i>
                        </Button>
                      </div>
                    </div>
                  </div>

                  <Card.Body className="d-flex flex-column">
                    {/* Project Status */}
                    <div className="d-flex justify-content-between align-items-center mb-2">
                      <Badge bg={getStatusVariant(project.status)}>
                        {project.status}
                      </Badge>
                      <small className="text-muted text-capitalize">
                        {project.category}
                      </small>
                    </div>

                    {/* Project Title */}
                    <Card.Title className="h5 mb-3">{project.title}</Card.Title>

                    {/* Project Description */}
                    <Card.Text className="flex-grow-1 mb-3">
                      {project.description}
                    </Card.Text>

                    {/* Technologies */}
                    <div className="mt-auto">
                      {project.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          bg={"secondary"}
                          text={"light"}
                          className="me-1 mb-3">
                          {tech}
                        </Badge>
                      ))}
                      <div className="d-flex gap-3 d-sm-none">
                        <Button variant="warning" href={project.liveUrl}>
                          <i className="bi bi-eye me-2"></i>
                          Live Demo
                        </Button>
                        <Button
                          className="bg-light"
                          variant="outline-dark"
                          href={project.githubUrl}>
                          <i className="bi bi-github me-2"></i>
                          View Code
                        </Button>
                      </div>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
        </Row>

        {/* View More Section */}
        <Row className="mt-5">
          <Col className="text-center">
            <Button
              variant={isDark ? "outline-light" : "outline-dark"}
              size="lg"
              href="https://github.com/teejayidrees"
              target="_blank">
              <i className="bi bi-github me-2"></i>
              View More on GitHub
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
