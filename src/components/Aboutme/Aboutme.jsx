import React from "react";
import "../../styles/global.css";

const AboutMe = () => {
  return (
    <section className="aboutme-section">
      <h2><u>About Me</u></h2>

      <div className="aboutme-cards">

        <div className="aboutme-card">
          <h3>Career Objective</h3>
          <p>
            MERN Stack Developer skilled in building full-stack web applications
            using React.js, Node.js, Express.js, MongoDB, HTML, CSS, JavaScript,
            Bootstrap, and REST APIs. Experienced in creating responsive,
            user-focused designs and scalable backend services.
          </p>
        </div>

        <div className="aboutme-card">
          <h3>Experience</h3>
          <ul>
            <li>
              <strong>Web Development Intern</strong> - Projection Edutech Pvt. Ltd.
              (jan 2025 - jun 2025)
              <br />
              Developed MernStack layouts for 2 live projects using HTML, CSS,
              React.js,node.js,express.js,mongoDB.
            </li>
            <li>
              <strong>React.js Training</strong> - Code Mantra (Jul 2023 - Oct 2023)
              <br />
              Built reusable components, responsive UI, integrated React Router.
            </li>
          </ul>
        </div>

        <div className="aboutme-card">
          <h3>Education & Certifications</h3>
          <ul>
            <li>B.Tech Computer Science - Chameli Devi Group of Institutions, Indore, 2025</li>
            <li>Certifications: AWS Cloud Foundations, React.js Training, MernStack Traning</li>
          </ul>
        </div>

      </div>
    </section>
  );
};

export default AboutMe;