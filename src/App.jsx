import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer";
import Background from "./components/Background";

import Chatbot from "./components/Chatbot.jsx";
import Summary from "./components/Summary.jsx";

export default function App() {
  return (
    <div className="text-white font-display">
      <Background />
      <Navbar />
      <Hero />
      <Summary />

      <About />
      <Skills />
      <Projects />
      <Contact />
      <Chatbot />
      <Footer />
    </div>
  );
}
