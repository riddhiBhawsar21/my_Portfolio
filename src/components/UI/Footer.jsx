import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <a href="#home" className="footer-logo logo-text">Riddhi</a>
          <p className="footer-tagline">Architecting digital experiences through minimalist code and technical excellence.</p>
        </div>

        <div className="footer-links">
          <div className="link-group">
            <h4 className="serif-text">Explore</h4>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
          </div>
          <div className="link-group">
            <h4 className="serif-text">Social</h4>
            <a href="https://github.com/riddhiBhawsar21" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://linkedin.com/in/riddhi-bhawsar" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="footer-top" onClick={scrollToTop}>
          <FaArrowUp />
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Riddhi Bhawsar. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
