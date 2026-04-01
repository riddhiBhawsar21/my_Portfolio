import "./Projects.css";
import { useEffect } from "react";

function Projects() {
  useEffect(() => {
    const cards = document.querySelectorAll(".project-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          } else {
            entry.target.classList.remove("show"); // re-trigger on scroll up/down
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
  }, []);
  return (
    <section className="section projects">

      <div className="profile">
        
            </div>

      <h2>Projects</h2>

      <div className="project-card">
        <h3>Multiple Disease Prediction System</h3>
        <p>
          A machine learning based application that predicts
          diseases using medical data.
        </p>
      </div>

      <div className="project-card">
        <h3>Auction Management System</h3>
        <p>
          A web application where users can create auctions
          and place bids.
        </p>
      </div>

    </section>
  );
}

export default Projects;