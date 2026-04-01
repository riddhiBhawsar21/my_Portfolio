import React from "react";
import "./About.css";
import profile from "../../assets/meri.jpg"; // make sure this path is correct
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import resume from "../../assets/Riddhi_Bhawsar_ResumeM.pdf";

function About() {
  return (
    <section className="hero">

      <div className="hero-left">
        <h1>
          <span className="name1">Riddhi</span>{" "}
          <span className="name2">Bhawsar</span>
        </h1>

        <h2 className="mern">MERN Stack Developer</h2>

        <p>
          Passionate MERN Stack Developer focused on building responsive and
          scalable web applications. Skilled in React.js, Node.js, MongoDB,
          and modern frontend technologies. Dedicated to crafting clean,
          user-friendly interfaces and smooth user experiences.
        </p>

      <div className="hero-buttons">
  <button
    onClick={() => {
      document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
    }}
  >
    See My Work
  </button>

  <button
    onClick={() => {
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
    }}
  >
    Contact Me
  </button>

  <a href={resume} download="Riddhi_Bhawsar_Resume.pdf">
    <button>Download Resume</button>
  </a>
</div>

        <div className="social-icons">
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/yourusername" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
        </div>
      </div>

      <div className="hero-right">
        <img src={profile} alt="profile" />
      </div>

    </section>
  );
}

export default About;