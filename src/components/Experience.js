import React from "react";
import "./Experience.css";

const experiences = [
  {
    date: "Nov 2024 – Present",
    company: "FSG IT SOLUTIONS PRIVATE LIMITED",
    role: "Software Engineer",
    description:
      "Developed and maintained Spring Boot microservices for payment processing, integrated banking APIs, and optimized real-time transactions using Apache Kafka.",
  },
  {
    date: "May 2024 – Oct 2024",
    company: "Dataknol Private Limited(Wells Fargo)",
    role: "Software Application Developer",
    description:
      "A developer portal offering accelerators and managed services for streamlined development lifecycles.",
  },
  {
    date: "Sep 2023 – May 2024",
    company: "EFUND TECHNICAL SERVICES PRIVATE LIMITED",
    role: "Software Application Developer",
    description:
      "Built financial services applications, integrated payment gateways, and designed scalable APIs using Spring Boot and PostgreSQL.",
  },
  {
    date: "Jan 2023 – Oct 2024",
    company: "Dataknol Private Limited",
    role: "Software Associate",
    description:
      "A liquidity management solution tailored for the banking sector, enabling real-time cash flow visibility and optimized fund utilization.",
  },
  {
    date: "Oct 2022 – Dec 2022",
    company: "ADIVERSE TECHNOLOGIES LLP",
    role: "Software Developer",
    description:
      "A cloud application that automates the end-to-end accreditation and ranking process for universities, Autonomous & Affiliated collages in India.",
  },
];

const Experience = () => {
  return (
    <section className="experience">
      <h2 className="section-title">Experience</h2>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className="timeline-item">
            {/* Left side: Date */}
            <div className="timeline-left">
              <span className="timeline-date">{exp.date}</span>
            </div>

            {/* Timeline Icon */}
            <div className="timeline-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>

            {/* Right side: Experience content */}
            <div className="timeline-content">
              <h3>{exp.company}</h3>
              <p><b>{exp.role}</b></p>
              <p>{exp.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
