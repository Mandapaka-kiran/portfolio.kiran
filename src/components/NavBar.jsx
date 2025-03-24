import React, { useState } from "react";
import "./NavBar.css";

const Navbar = ({ scrollToSection, homeRef, aboutRef, experienceRef, educationRef, projectRef, skillsRef, contactRef }) => {
  const [clicked, setClicked] = useState(false);

  // Function to handle link click and close the menu
  const handleLinkClick = (sectionRef) => {
    scrollToSection(sectionRef);
    setClicked(false); // Close the menu when a link is clicked
  };

  return (
    <nav className="NavbarItems">
      <h1 className="logo">Resume</h1>
      <div className="menu-icons" onClick={() => setClicked(!clicked)}>
        <i className={clicked ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={clicked ? "nav-menu active" : "nav-menu"}>
        <li onClick={() => handleLinkClick(homeRef)} className="nav-links">Home</li>
        <li onClick={() => handleLinkClick(aboutRef)} className="nav-links">About</li>
        <li onClick={() => handleLinkClick(experienceRef)} className="nav-links">Experience</li>
        <li onClick={() => handleLinkClick(educationRef)} className="nav-links">Education</li>
        <li onClick={() => handleLinkClick(projectRef)} className="nav-links">Projects</li>
        <li onClick={() => handleLinkClick(skillsRef)} className="nav-links">Skills</li>
        <li onClick={() => handleLinkClick(contactRef)} className="nav-links">Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
