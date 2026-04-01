import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Aboutme from "./components/Aboutme/Aboutme";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <>
      <Navbar />

      <section id="home">
        <About />
      </section>

      <section id="about">
        <Aboutme />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default App;