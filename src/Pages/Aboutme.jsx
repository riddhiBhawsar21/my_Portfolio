import React from "react";

const AboutMe = () => {
  return (
    <section className="aboutme-section" id="about">
      <h2 className="section-title">Philosophy & Narrative</h2>

      <div className="aboutme-cards">
        <div className="point-box">
          <h3 className="serif-text">Mission</h3>
          <p>
            To engineer digital ecosystems that are not only functional but also emotionally resonant. I specialize in the MERN stack, pushing the boundaries of what's possible in the browser.
          </p>
        </div>

        <div className="point-box">
          <h3 className="serif-text">Evolution</h3>
          <div className="experience-item">
            <h4>Web Development Intern</h4>
            <span className="text-secondary">Code Better!! | 2025</span>
            <p>Architected MERN layouts for high-traffic live projects, focusing on performance and modularity.</p>
          </div>
          <div className="experience-item">
            <h4>React.js Specialist</h4>
            <span className="text-secondary">2023</span>
            <p>Mastered complex state management and responsive architectural patterns.</p>
          </div>
        </div>

        <div className="point-box">
          <h3 className="serif-text">Foundation</h3>
          <div className="education-item">
            <h4>B.Tech Computer Science</h4>
            <p className="text-secondary">Chameli Devi Group of Institutions, Indore, 2025</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
