import React from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Fisec Gen AI Liquidity Management",
    role: "Software Application Developer",
    duration: "Nov 2024 – Present",
    description:
      "An embedded payments platform streamlining financial transactions, fraud detection, and seamless payment integrations.",
    technologies: ["Spring Boot", "Spring AI", "Apache Kafka", "PostgreSQL", "MongoDB", "AWS (EC2, RDS, S3)", "GitHub"],
  },
  {
    title: "IDP (Wells Fargo)",
    role: "Software Application Developer",
    duration: "Jan 2023 – Nov 2024",
    description:
      "A developer portal offering accelerators and managed services for streamlined development lifecycles.",
    technologies: ["Spring Boot", "Apache Kafka", "PostgreSQL", "Jenkins", "JUnit", "Mockito", "SonarQube"],
  },
  {
    title: "EFundZZ",
    role: "Software Associate",
    duration: "Sep 2023 – May 2024",
    description:
      "A fintech platform for digital financial services like lending, insurance, and investments.",
    technologies: ["Spring Boot", "Spring Security", "Hibernate", "PostgreSQL", "AWS", "Jenkins"],
  },
];

const Projects = () => {
  return (
    <section className="projects">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projectsData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p><b>{project.role}</b> | {project.duration}</p>
            <p>{project.description}</p>
            <div className="project-tech">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
