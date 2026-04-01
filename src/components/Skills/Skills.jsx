import "../../styles/global.css";
import { FaNodeJs, FaReact, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiCplusplus } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 color="#E34F26" /> },
    { name: "CSS", icon: <FaCss3Alt color="#1572B6" /> },
    { name: "JavaScript", icon: <FaJs color="#F7DF1E" /> },
    { name: "React", icon: <FaReact color="#61DAFB" /> },
    { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
    { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
    { name: "Express", icon: <SiExpress color="#FFFFFF" /> },
    { name: "C++", icon: <SiCplusplus color="#00599C" /> },
  ];

  return (
    <section className="skills">
      <h2>Skills</h2>

      <div className="slider">
        <div className="slide-track">
          {skills.concat(skills).map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;