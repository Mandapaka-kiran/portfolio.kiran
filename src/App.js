import React, { useRef } from "react";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Experience from "./components/Experience";
import "./App.css";
import Education from "./components/Education";
import Projects from "./components/Project";
import Skills from "./components/skills";
import Contact from "./components/Contact";

const App = () => {
  // Create references for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const experienceRef = useRef(null);
  const educationRef = useRef(null);
  const projectRef = useRef(null);
  const skillsRef = useRef(null);
const contatctRef=useRef(null);
  // Function to scroll smoothly
  const scrollToSection = (ref) => {
    if (ref && ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop - 80, // Adjust for Navbar height
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <Navbar scrollToSection={scrollToSection} homeRef={homeRef} aboutRef={aboutRef} experienceRef={experienceRef} projectRef={projectRef} educationRef={educationRef} skillsRef={skillsRef} contatctRef={contatctRef}/>
      <div ref={homeRef}>
        <Home />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={experienceRef}>
        <Experience />
      </div>
      <div ref={educationRef}>
        <Education />
      </div>
      <div ref={projectRef}>
        <Projects />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={contatctRef}>
        <Contact />
      </div>
    </div>
  );
};

export default App;
