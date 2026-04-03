import React from "react";
import profile from "../assets/meri.jpg";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";
import Button from "../components/UI/Button";
import resume from "../assets/Riddhi_Bhawsar_ResumeM.pdf";

function About() {
  return (
    <section className="hero" style={{ padding: "4rem 0", position: "relative" }}>
      <div className="hero-content" style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "3rem", justifyContent: "space-between"}}>
        
        <div className="hero-left" style={{ flex: "1 1 350px", display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem', background: 'transparent' }}>
            <img 
              src={profile} 
              alt="Riddhi Bhawsar" 
              className="hero-image" 
              style={{
                width: "280px", 
                height: "350px", 
                objectFit: "cover", 
                border: "4px solid rgba(255,182,193,0.4)",
                boxShadow: "0 15px 40px rgba(255, 182, 193, 0.25), inset 0 0 20px rgba(255,255,255,0.2)",
                transition: "transform 0.3s ease"
              }} 
            />
          </div>
        </div>

        <div className="hero-right" style={{ flex: "1 1 500px", padding: "0 1rem" }}>
          <div className="mern-badge" style={{
            display: "inline-block", background: "rgba(255, 182, 193, 0.1)",
            border: "1px solid rgba(255, 182, 193, 0.3)", color: "#ffb6c1",
            padding: "8px 18px", borderRadius: "30px", fontSize: "0.9rem",
            fontWeight: "600", letterSpacing: "1px", marginBottom: "15px", marginTop: "60px",
            boxShadow: "0 4px 15px rgba(255, 182, 193, 0.15)"
          }}>
            MERN Stack Developer
          </div>
          
          <h1 className="hero-title" style={{ 
            fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
            fontWeight: "700",
            marginBottom: "1rem",
            background: "linear-gradient(135deg, #FFF 0%, #ffb6c1 100%)", 
            WebkitBackgroundClip: "text", 
            WebkitTextFillColor: "transparent", 
            display: "inline-block" 
          }}>
            About Riddhi
          </h1>

          <div className="hero-description" style={{ color: "#d1d1d1", fontSize: "1.05rem", lineHeight: "1.7" }}>
            <p style={{ 
              fontStyle: "italic", marginBottom: "25px", opacity: 0.85, 
              borderLeft: "3px solid #ffb6c1", paddingLeft: "15px", background: "rgba(255,255,255,0.02)", padding: "10px 15px", borderRadius: "0 10px 10px 0"
            }}>
              "I am an aspiring professional with a solid understanding of fundamental concepts and a keen interest in expanding my expertise. I am eager to take on new challenges, gain practical experience, and contribute meaningfully while continuously learning and growing in a dynamic work environment."
            </p>
            <p style={{ marginBottom: "25px" }}>
              My expertise lies in translating complex business challenges into clear, actionable digital strategies. As a <strong style={{ color: "#fff" }}>Full-Stack Developer</strong> and <strong style={{ color: "#fff" }}>UI/UX Specialist</strong>, I partner with founders, leaders, and teams to build products that are not only user-centric but also drive tangible business growth through meticulously crafted code and strategic thinking.
            </p>
          </div>

          <div className="hero-cta" style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginTop: "25px" }}>
            <Button
              variant="primary"
              onClick={() => {
                document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
              }}
              style={{
                padding: "12px 28px", borderRadius: "10px", fontWeight: "600",
                background: "linear-gradient(135deg, #ffb6c1, #e6a8d7)",
                color: "#111", border: "none", cursor: "pointer",
                boxShadow: "0 6px 20px rgba(255,182,193,0.3)", transition: "all 0.3s"
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = "linear-gradient(135deg, #e6a8d7, #ffb6c1)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 25px rgba(255,182,193,0.4)"; }}
              onMouseOut={(e) => { e.currentTarget.style.background = "linear-gradient(135deg, #ffb6c1, #e6a8d7)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(255,182,193,0.3)"; }}
            >
              Get in Touch
            </Button>
            <a 
              href={resume} 
              download="Riddhi_Bhawsar_Resume.pdf" 
              className="resume-link"
              style={{
                display: "flex", alignItems: "center", gap: "8px",
                padding: "12px 28px", borderRadius: "10px", fontWeight: "600",
                background: "linear-gradient(135deg, #ffb6c1, #e6a8d7)", color: "#111",
                border: "none", textDecoration: "none",
                boxShadow: "0 6px 20px rgba(255,182,193,0.3)", transition: "all 0.3s", cursor: "pointer"
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = "linear-gradient(135deg, #e6a8d7, #ffb6c1)"; e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 8px 25px rgba(255,182,193,0.4)"; }}
              onMouseOut={(e) => { e.currentTarget.style.background = "linear-gradient(135deg, #ffb6c1, #e6a8d7)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 6px 20px rgba(255,182,193,0.3)"; }}
            >
              <FaDownload /> Download CV
            </a>
          </div>

          <div className="social-links" style={{ display: "flex", gap: "15px", marginTop: "25px" }}>
            <a 
              href="https://github.com/riddhiBhawsar21" 
              target="_blank" rel="noreferrer" 
              className="social-link"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: "48px", height: "48px", borderRadius: "12px", textDecoration: "none",
                background: "rgba(255,255,255,0.06)", color: "#fff", fontSize: "1.3rem",
                border: "1px solid rgba(255,255,255,0.1)", transition: "all 0.3s"
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = "#ffb6c1"; e.currentTarget.style.border = "1px solid #ffb6c1"; e.currentTarget.style.color = "#111"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(255,182,193,0.4)"; }}
              onMouseOut={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com/in/riddhi-bhawsar" 
              target="_blank" rel="noreferrer" 
              className="social-link"
              style={{
                display: "flex", alignItems: "center", justifyContent: "center",
                width: "48px", height: "48px", borderRadius: "12px", textDecoration: "none",
                background: "rgba(255,255,255,0.06)", color: "#fff", fontSize: "1.3rem",
                border: "1px solid rgba(255,255,255,0.1)", transition: "all 0.3s"
              }}
              onMouseOver={(e) => { e.currentTarget.style.background = "#ffb6c1"; e.currentTarget.style.border = "1px solid #ffb6c1"; e.currentTarget.style.color = "#111"; e.currentTarget.style.transform = "translateY(-4px)"; e.currentTarget.style.boxShadow = "0 8px 20px rgba(255,182,193,0.4)"; }}
              onMouseOut={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.06)"; e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)"; e.currentTarget.style.color = "#fff"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
