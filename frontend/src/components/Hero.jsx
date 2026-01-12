// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";
// import { useTheme } from "../contexts/ThemeContext";
// import Resume from "../media/myResume.pdf";

// const Hero = () => {
//   const { isDark } = useTheme();

//   const scrollToSection = (id) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   const handleDownload = () => {
//     const link = document.createElement("a");
//     link.href = Resume;
//     link.download = "Ahmad-Idris-Resume.pdf";
//     link.click();
//   };

//   return (
//     <section
//       id="hero"
//       className={`min-vh-80 d-flex align-items-center ${
//         isDark ? "bg-dark text-light" : "bg-light text-dark"
//       }`}
//       style={{ paddingTop: "80px" }}>
//       <Container>
//         <Row className="justify-content-center">
//           <Col lg={8} className="text-center">
//             <h1 className="fw-bold mb-3">
//               Hi, I’m <span className="text-primary">Ahmad Idris</span>
//             </h1>

//             <h2 className="h5 fw-normal mb-3">Full-Stack Web Developer</h2>

//             <p className="mb-4 text-muted">
//               I build clean, functional web applications with modern tools.
//             </p>

//             <div className="d-flex justify-content-center gap-3 flex-wrap">
//               <Button
//                 variant="primary"
//                 size="lg"
//                 onClick={() => scrollToSection("projects")}>
//                 View Projects
//               </Button>

//               <Button
//                 variant="outline-secondary"
//                 size="lg"
//                 onClick={handleDownload}>
//                 Download Resume
//               </Button>
//             </div>

//             <div className="mt-4 medium text-muted">
//               📍 Minna, Nigeria · Available for work
//             </div>
//           </Col>
//         </Row>
//       </Container>
//     </section>
//   );
// };

// export default Hero;

import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useTheme } from "../contexts/ThemeContext";
import Resume from "../media/myResume.pdf";

const Hero = () => {
  const { isDark } = useTheme();
  const [showMore, setShowMore] = useState(false);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = Resume;
    link.download = "Ahmad-Idris-Resume.pdf";
    link.click();
  };

  return (
    <section
      id="hero"
      className={`${isDark ? "bg-dark text-light" : "bg-light text-dark"}`}
      style={{ paddingTop: "80px", paddingBottom: "30px" }}>
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            {/* HERO CONTENT */}
            <h1 className="fw-bold mb-3">
              Hi, I’m <span className="text-primary">Ahmad Idris</span>
            </h1>

            <h2 className="h5 fw-normal mb-3">Full-Stack Web Developer</h2>

            <p className={`mb-4 ${isDark ? "text-light " : " text-muted "}`}>
              I build clean, functional web applications using modern web
              technologies.
            </p>

            <div className="d-flex justify-content-center gap-3 flex-wrap mb-4">
              {/* <Button
                variant="primary"
                size="sm"
                onClick={() => scrollToSection("projects")}>
                View Projects
              </Button> */}

              <Button
                variant="outline-primary"
                size="sm"
                onClick={() => scrollToSection("contact")}>
                Contact Me
              </Button>

              <Button variant="success" size="sm" onClick={handleDownload}>
                View My Resume
              </Button>
            </div>

            {/* ABOUT PREVIEW */}
            <div className="text-start">
              <h3 className="h5 fw-bold mb-3 text-center">About Me</h3>

              <p className={`${isDark ? "text-light" : "text-muted"}`}>
                I’m a Full-Stack Web Developer passionate about building
                scalable, user-focused web applications and solving real-world
                problems with clean code.
              </p>

              {showMore && (
                <>
                  <p className={` ${isDark ? "text-light" : "text-muted"}`}>
                    My journey into web development grew from a strong interest
                    in how systems work behind the scenes. I specialize mainly
                    in JavaScript, the MERN stack, and modern frontend tools,
                    while continuously improving my backend and system design
                    skills.
                  </p>

                  <p className={` ${isDark ? "text-light" : "text-muted"}`}>
                    I value clean architecture, maintainable code, and practical
                    solutions over unnecessary complexity. Outside coding, I
                    enjoy learning new technologies, contributing to projects,
                    and sharing knowledge.
                  </p>
                </>
              )}

              <div className="text-center mt-0">
                <Button
                  variant="link"
                  className="text-decoration-none fw-semibold mt-0"
                  onClick={() => setShowMore(!showMore)}>
                  {showMore ? "Read less" : "Read more"}
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
