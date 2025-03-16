import React from "react";
import "./About.css";

const About = () => {
    return (
        <section className="about">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <img src='' alt="Kiran Mandapaka" className="about-img" />
            <p>
              Hello stranger! 👋 My name is Kiran Mandapaka and I am a Java Developer
              passionate about building digital products that improve everyday experiences for people.
              I love working on exciting projects that challenge me, while staying updated with
              the latest technologies. I'm always looking for better, ethical, and accessible solutions 
              to real-world problems.
            </p>
          </div>
        </section>
      );
};

export default About;
