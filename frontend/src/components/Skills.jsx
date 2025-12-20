import React from "react";
import { Container, Row, Col, Badge } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeContext";

const Skills = () => {
  const { isDark } = useTheme();

  const skillGroups = [
    {
      title: "Frontend",
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Next.js",
        "Bootstrap",
        "Tailwind CSS",
        "TypeScript",
      ],
    },
    {
      title: "Backend",
      skills: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "REST APIs",
        "Firebase",
        "supabase",
      ],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "npm", "Vercel", "Chrome DevTools"],
    },
  ];

  return (
    <section
      id="skills"
      className={`${isDark ? "bg-dark text-light" : "bg-light text-dark"}`}
      style={{ padding: "80px 0" }}>
      <Container>
        {/* Header */}
        <Row className="mb-4">
          <Col className="text-center">
            <h2 className="fw-bold mb-2">Skills</h2>
            <p className="text-muted">Technologies I work with regularly</p>
          </Col>
        </Row>

        {/* Skills */}
        <Row className="g-4 justify-content-center">
          {skillGroups.map((group, index) => (
            <Col md={6} lg={4} key={index}>
              <h5 className="fw-semibold mb-3 text-center">{group.title}</h5>

              <div className="d-flex flex-wrap justify-content-center gap-2">
                {group.skills.map((skill, idx) => (
                  <Badge
                    key={idx}
                    bg={isDark ? "secondary" : "light"}
                    text={isDark ? "light" : "dark"}
                    className="px-3 py-2">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
