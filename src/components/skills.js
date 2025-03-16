import React from "react";
import "./Skills.css";

const technicalSkills = [
  "Java", "JavaScript", "Spring Boot", "Hibernate", "Spring MVC",
  "Spring Cloud", "Spring AI", "Microservices", "Camunda", "Kafka",
  "React JS", "MongoDB", "PostgreSQL", "Vector DB", "Bitbucket",
  "GitHub", "AWS", "Maven", "Gradle", "CI/CD Pipelines", "Apache Tomcat",
  "IntelliJ IDEA", "Spring Tool Suite (STS)", "Eclipse"
];

const softSkills = [
  "Problem-Solving & Debugging", "Communication Skills", 
  "Team Collaboration (Agile & Scrum)", "Adaptability to New Technologies"
];

const Skills = () => {
  return (
    <section className="skills">
      <h2 className="section-title">Skills</h2>

      {/* Technical Skills Section */}
      <div className="skills-container">
        <h3>Technical Skills</h3>
        <div className="skills-list">
          {technicalSkills.map((skill, index) => (
            <span key={index} className="skill-badge">{skill}</span>
          ))}
        </div>
      </div>

      {/* Soft Skills Section */}
      <div className="skills-container">
        <h3>Soft Skills</h3>
        <ul className="soft-skills-list">
          {softSkills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
