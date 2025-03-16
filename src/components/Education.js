import React from "react";
import "./Education.css";

const educationData = [
  {
    school: "Swarnandhra College of Engineering & Technology",
    degree: "BTech in Mechanical Engineering",
    duration: "May 2019 – May 2022",
  },
];

const Education = () => {
  return (
    <section className="education">
      <h2 className="section-title">Education</h2>
      <div className="education-container">
        {educationData.map((edu, index) => (
          <div key={index} className="education-card">
            <div className="education-left">
              <h3>{edu.school}</h3>
              <p>{edu.degree}</p>
            </div>
            <div className="education-right">
              <p>{edu.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
