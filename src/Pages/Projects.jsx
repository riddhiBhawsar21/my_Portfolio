import { motion } from "framer-motion";
import { useState } from "react";
import diseasePredict from "../assets/health.png";
import auctionMgmt from "../assets/auction.png";
import { FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const [clickedProjects, setClickedProjects] = useState(new Set());
  
  const projects = [
    {
      title: "Disease Prediction System",
      description: "A sophisticated machine learning application that predicts multiple diseases using medical data analysis. Built with Python, Flask, and React for a seamless user experience.",
      image: diseasePredict,
      live: "#"
    },
    {
      title: "Auction Management",
      description: "A real-time web application where users can create auctions and place bids. Implemented using Socket.io for live updates and Node.js for scalability.",
      image: auctionMgmt,
      live: "#"
    }
  ];

  const handleProjectClick = (index) => {
    setClickedProjects(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Selected Works</h2>

      <div className="project-list">
        {projects.map((project, index) => (
          <motion.div
            className="project-card"
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            onClick={() => handleProjectClick(index)}
            style={{ cursor: 'pointer' }}
          >
            <div className="project-image-wrapper">
              <img 
                src={project.image} 
                alt={project.title} 
                className="project-image" 
                style={{
                  filter: clickedProjects.has(index) ? 'grayscale(100%)' : 'none',
                  transition: 'filter 0.3s ease'
                }}
              />
              <div className="project-overlay">
                <div className="project-links">
                  <a href={project.live} target="_blank" rel="noreferrer"><FaExternalLinkAlt /></a>
                </div>
              </div>
            </div>

            <div className="project-info">
              <h3 className="serif-text">{project.title}</h3>
              <p className="text-secondary">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
