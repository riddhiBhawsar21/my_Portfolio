import React from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaGithub, FaLinkedin } from "react-icons/fa";
import Button from "../components/UI/Button";

function Contact() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      
      <div className="contact-container">
        <motion.div 
          className="contact-info"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="info-item">
            <div className="info-icon"><FaEnvelope /></div>
            <div className="info-text">
              <h4 className="serif-text">Email</h4>
              <p>riddhibhawsar21@gmail.com</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon"><FaPhone /></div>
            <div className="info-text">
              <h4 className="serif-text">Phone</h4>
              <p>+91 7223956021</p>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon"><FaGithub /></div>
            <div className="info-text">
              <h4 className="serif-text">GitHub</h4>
              <a href="https://github.com/riddhiBhawsar21" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                github.com/riddhiBhawsar21
              </a>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon"><FaLinkedin /></div>
            <div className="info-text">
              <h4 className="serif-text">LinkedIn</h4>
              <a href="https://www.linkedin.com/in/riddhi-bhawsar-017a18251/" target="_blank" rel="noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                linkedin.com/in/riddhi-bhawsar
              </a>
            </div>
          </div>
          <div className="info-item">
            <div className="info-icon"><FaMapMarkerAlt /></div>
            <div className="info-text">
              <h4 className="serif-text">Location</h4>
              <p>Indore, MP, India</p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="contact-right"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <input type="text" placeholder="Name" className="glass-input" required />
            </div>
            <div className="input-group">
              <input type="email" placeholder="Email" className="glass-input" required />
            </div>
            <div className="input-group">
              <textarea placeholder="Message" className="glass-textarea" rows="5" required></textarea>
            </div>
            <Button variant="primary" type="submit" style={{ width: "100%", marginTop: "20px" }}>
              Send Message <FaPaperPlane style={{ marginLeft: "10px" }} />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

export default Contact;
