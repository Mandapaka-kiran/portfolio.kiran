import React from "react";
import "./Projects.css";

const projectsData = [
  {
    title: "Fisec Gen AI Liquidity Management",
    role: "Software Engineer",
    duration: "Nov 2024 – Present",
    description:
      "An embedded payments platform streamlining financial transactions, fraud detection, and seamless payment integrations.",
    technologies: ["Spring Boot", "Spring AI", "Apache Kafka", "PostgreSQL", "MongoDB", "AWS (EC2, RDS, S3)", "Gitea", "Agile"],
  },
  {
    title: "IDP Dataknol Private Limited (Wells Fargo)",
    role: "Software Application Developer",
    duration: "May 2024 – Oct 2024",
    description:
      "A developer portal offering accelerators and managed services for streamlined development lifecycles.",
    technologies: ["Spring Boot", "Apache Kafka", "PostgreSQL", "Jenkins", "JUnit", "Mockito", "SonarQube","Agile", "GitHub"],
  },
  {
    title: "EFundZZ",
    role: "Software Associate",
    duration: "Sep 2023 – May 2024",
    description:
      "A fintech platform for digital financial services like lending, insurance, and investments.",
    technologies: ["Spring Boot", "Spring Security", "Camunda", "Hibernate", "PostgreSQL", "AWS", "Jenkins", "Bitbucket" , "Agile"],
  },
  {
    title: "Dataknol Private Limited",
    role: "Software Associate Trainee",
    duration: "Jan 2023 – Oct 2023",
    description:
      "A liquidity management solution tailored for the banking sector, enabling real-time cash flow visibility and optimized fund utilization.",
    technologies: ["Spring Boot", "Apache Kafka", "PostgreSQL", "JUnit", "GitHub"],
  },
  {
    title: "ADIVERSE TECHNOLOGIES LLP ",
    role: "Software Developer",
    duration: "Oct 2022 – Dec 2022",
    description:
      "A cloud application that automates the end-to-end accreditation and ranking process for universities, Autonomous & Affiliated collages in India.",
    technologies: ["Spring Boot", "Spring Security", "Hibernate", "PostgreSQL", "GitHub", "Waterfall"],
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
