import { useState, useEffect } from "react";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <a href="#home" className="logo-text">
        Riddhi
      </a>

      <ul className="nav-links">
        {["about", "skills", "projects", "contact"].map((nav) => (
          <li key={nav}>
            <a 
              href={`#${nav}`} 
              className={activeSection === nav ? "active-nav" : ""}
            >
              {nav}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
