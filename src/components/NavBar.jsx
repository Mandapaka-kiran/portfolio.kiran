import React, { useState } from "react";
import "./NavBar.css";

const Navbar = ({ scrollToSection, homeRef, aboutRef, experienceRef,educationRef,projectRef,skillsRef,contatctRef }) => {
  const [clicked, setClicked] = useState(false);

  return (
    <nav className="NavbarItems">
      <h1 className="logo">Resume</h1>
      <div className="menu-icons" onClick={() => setClicked(!clicked)}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li onClick={() => scrollToSection(homeRef)} className="nav-links">Home</li>
        <li onClick={() => scrollToSection(aboutRef)} className="nav-links">About</li>
        <li onClick={() => scrollToSection(experienceRef)} className="nav-links">Experience</li>
        <li onClick={() => scrollToSection(educationRef)} className="nav-links">Education</li>
        <li onClick={() => scrollToSection(projectRef)} className="nav-links">Projects</li>
        <li onClick={() => scrollToSection(skillsRef)} className="nav-links">Skills</li>
        <li onClick={()=>scrollToSection(contatctRef)} className="nav-links">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
