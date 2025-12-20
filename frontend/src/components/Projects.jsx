import React, { useState } from "react";
import { Container, Row, Col, Card, Badge, Button } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeContext";
import CodedRatips from "../media/coded-ratips.png";
import Quiz from "../media/quiz.png";
import NewsHubPic from "../media/news-app.png";
import Auryne from "../media/auryne.png";

const Projects = () => {
  const { isDark } = useTheme();
  const [expanded, setExpanded] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Coded Ratips",
      description:
        "An interactive number guessing game focused on logic and critical thinking, featuring levels, progress tracking, and competitive gameplay.",
      image: CodedRatips,
      technologies: ["React", "Node.js", "MongoDB", "Next.js"],
      liveUrl: "https://coded-ratips.vercel.app",
      githubUrl: "#",
    },

    {
      id: 2,
      title: "Quiz / Exam App",
      description:
        "A full-stack quiz and exam platform with admin controls, authentication, dashboards, and an anti-cheat system that auto-submits when users leave the test environment.",
      image: Quiz,
      technologies: ["Next.js", "MongoDB", "TailwindCSS", "TypeScript"],
      liveUrl: "https://aheee-quiz-app.vercel.app",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Naija NewsHub",
      description:
        "A responsive news platform built with Next.js and NewsAPI, delivering real-time Nigerian and global headlines with a clean and intuitive UI.",
      image: NewsHubPic,
      technologies: ["Next.js", "TypeScript", "Tailwind", "NewsAPI"],
      liveUrl: "https://aheee-news-app.vercel.app",
      githubUrl: "https://github.com/teejayidrees/news-app",
    },
    {
      id: 4,
      title: "Auryne Perfume store",
      description:
        "A modern e-commerce platform for a luxury perfume brand, featuring product listings, shopping cart, and secure checkout using WhatsApp.",
      image: Auryne,
      technologies: ["Next.js", "TailwindCSS", "TypeScript", "mongoDB"],
      liveUrl: "https://auryne.vercel.app",
      githubUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      className={`${isDark ? "bg-dark text-light" : "bg-light text-dark"}`}
      style={{ padding: "50px 0" }}>
      <Container>
        {/* Header */}
        <Row className="mb-4">
          <Col className="text-center">
            <h2 className="fw-bold mb-2">Projects</h2>
            <p className="text-muted">
              Selected work showcasing my skills and experience
            </p>
          </Col>
        </Row>

        {/* Projects Grid */}
        <Row className="g-4">
          {projects.map((project) => {
            // const isOpen = expanded === project.id;
            // const shortText = project.description.slice(0, 120);

            return (
              <Col md={6} lg={4} key={project.id}>
                <Card
                  className={`h-100 border ${
                    isDark ? "bg-dark text-light" : "bg-white"
                  }`}>
                  <Card.Img
                    src={project.image}
                    alt={project.title}
                    style={{ height: "180px", objectFit: "cover" }}
                  />

                  <Card.Body className="d-flex flex-column">
                    <Card.Title className="h6 fw-bold">
                      {project.title}
                    </Card.Title>

                    <Card.Text className="small text-muted">
                      {project.description}
                      {/* {isOpen ? project.description : shortText} */}
                      {/* {project.description.length > 140 && (
                        <Button
                          variant="null"
                          className="p-0 ms small align-baseline text-decoration-none text-muted  fs-10"
                          onClick={() =>
                            setExpanded(isOpen ? null : project.id)
                          }>
                          {isOpen ? " " : "...Read more"}
                        </Button>
                      )} */}
                    </Card.Text>

                    {/* Tech stack */}
                    <div className="mb-3">
                      {project.technologies.map((tech, index) => (
                        <Badge
                          key={index}
                          bg={isDark ? "secondary" : "light"}
                          text={isDark ? "light" : "dark"}
                          className="me-1 mb-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="mt-auto d-flex gap-2">
                      <Button
                        size="sm"
                        variant="primary"
                        onClick={() => window.open(project.liveUrl, "_blank")}>
                        Live
                      </Button>
                      <Button
                        size="sm"
                        variant={isDark ? "outline-light" : "outline-dark"}
                        href={project.githubUrl}>
                        Code (GitHub)
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>

        {/* GitHub */}
        <Row className="mt-5">
          <Col className="text-center">
            <Button
              variant={isDark ? "outline-light" : "outline-dark"}
              href="https://github.com/teejayidrees"
              target="_blank">
              View more on GitHub
            </Button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
