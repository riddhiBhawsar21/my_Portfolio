import { motion } from "framer-motion";
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiCplusplus, SiSwagger } from "react-icons/si";

function Skills() {
  const allSkills = [
    { name: "React", description: "Building interactive user interfaces and SPA architectures.", icon: <FaReact color="#61DAFB" /> },
    { name: "JavaScript", description: "Implementing dynamic logic and functional application flows.", icon: <FaJs color="#F7DF1E" /> },
    { name: "HTML5", description: "Structuring semantic, accessible web content.", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS3", description: "Designing responsive, animated layouts and styles.", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "Node.js", description: "Developing robust and scalable backend services.", icon: <FaNodeJs color="#339933" /> },
    { name: "Express", description: "Creating rapid RESTful API infrastructure.", icon: <SiExpress color="#FFFFFF" /> },
    { name: "MongoDB", description: "Managing flexible NoSQL database schemas.", icon: <SiMongodb color="#47A248" /> },
    { name: "Swagger", description: "Documenting and testing API endpoints professionally.", icon: <SiSwagger color="#85EA2D" /> },
    { name: "C++", description: "Writing high-performance algorithms and system-level code.", icon: <SiCplusplus color="#00599C" /> },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { type: "tween", duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section className="skills" id="skills" style={{ padding: "4rem 0" }}>
      <h2 className="section-title">Technical Expertise</h2>
      
      <div className="skills-container" style={{ padding: "2rem 1rem" }}>
        <motion.div 
          className="skills-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
            maxWidth: "1100px",
            margin: "0 auto"
          }}
        >
          {allSkills.map((skill, index) => (
            <motion.div 
              className="skill-card hover-lift" 
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5,
                boxShadow: "0 12px 32px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1) inset"
              }}
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                padding: "1.8rem 1.5rem",
                borderRadius: "16px",
                background: "rgba(15, 15, 20, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.08)",
                backdropFilter: "blur(20px)",
                cursor: "pointer",
                textAlign: "left",
                gap: "1.2rem",
                transition: "background 0.3s ease"
              }}
            >
              <div 
                className="icon-container" 
                style={{ 
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "2.8rem", 
                  width: "60px",
                  height: "60px",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "12px",
                  flexShrink: 0,
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)"
                }}
              >
                {skill.icon}
              </div>
              
              <div className="skill-content">
                <h3 className="serif-text" style={{ 
                  fontSize: "1.25rem", 
                  margin: "0 0 0.4rem 0", 
                  fontWeight: "600",
                  color: "#f8f8f8",
                  letterSpacing: "0.5px"
                }}>
                  {skill.name}
                </h3>
                <p style={{ 
                  margin: 0, 
                  fontSize: "0.9rem", 
                  color: "#a0a0b0",
                  lineHeight: "1.4"
                }}>
                  {skill.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Skills;
