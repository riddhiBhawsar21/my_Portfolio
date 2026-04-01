import "./Contact.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from "react-icons/fa";

function Contact() {
  return (
    <section className="section contact">

      <h2 className="contact-title">Contact</h2>

      <div className="contact-container">

       <div className="contact-card">
  <FaEnvelope className="icon" style={{ color: "#EA4335" }} />
  <p>Email</p>
  <span>riddhibhawsar21@gmail.com</span>
</div>

<a
  href="https://github.com/riddhiBhawsar21"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-card"
>
  <FaGithub className="icon" style={{ color: "#ffffff" }} />
  <p>GitHub</p>
  <span>github.com/riddhiBhawsar21</span>
</a>

<a
  href="https://www.linkedin.com/in/riddhi-bhawsar-017a18251/"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-card"
>
  <FaLinkedin className="icon" style={{ color: "#0077B5" }} />
  <p>LinkedIn</p>
  <span>linkedin.com/in/riddhi-bhawsar</span>
</a>

<a
  href="https://www.instagram.com/ridh21_/"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-card"
>
  <FaInstagram className="icon" style={{ color: "#E4405F" }} />
  <p>Instagram</p>
  <span>instagram.com/ridh21_</span>
</a>

      </div>
    </section>
  );
}

export default Contact;