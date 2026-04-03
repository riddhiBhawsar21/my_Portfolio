import { motion, AnimatePresence } from "framer-motion";
import Navbar from "./Pages/Navbar";
import About from "./Pages/About";
import Aboutme from "./Pages/Aboutme";
import Skills from "./Pages/Skills";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
function App() {
  const pageVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -30 }
  };

  return (
    <div className="portfolio-app">
      <Navbar />

      <AnimatePresence mode="wait">
        <main>
          <motion.section 
            id="home"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            variants={pageVariants}
          >
            <About />
          </motion.section>

          <motion.section 
            id="about"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            variants={pageVariants}
          >
            <Aboutme />
          </motion.section>

          <motion.section 
            id="skills"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            variants={pageVariants}
          >
            <Skills />
          </motion.section>

          <motion.section 
            id="projects"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            variants={pageVariants}
          >
            <Projects />
          </motion.section>

          <motion.section 
            id="contact"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            variants={pageVariants}
          >
            <Contact />
          </motion.section>
        </main>
      </AnimatePresence>
    </div>
  );
}

export default App;