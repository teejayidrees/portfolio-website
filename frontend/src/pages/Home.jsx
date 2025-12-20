import React from "react";
import Hero from "../components/Hero";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Contact from "../components/Contact";

/**
 * Home Page Component
 * - Main landing page containing all portfolio sections
 * - Composed of multiple section components stacked vertically
 * - Each section is a separate component for better organization and reusability
 */
const Home = () => {
  return (
    <div className="home-page" style={{ width: "100%" }}>
      {/* Hero Section - Main introduction and call-to-action */}
      <Hero />

      {/* Projects Section - Portfolio of work and projects */}
      <Projects />

      {/* Skills Section - Technical skills and competencies */}
      <Skills />

      {/* Experience Section - Work history and education */}
      <Experience />

      {/* Contact Section - Contact form and information */}
      <Contact />
    </div>
  );
};

export default Home;
