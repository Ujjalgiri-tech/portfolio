import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function App() {
  return (
    <div className="relative gradient text-white">
      <CustomCursor />
      <Navbar />

      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skills /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>

      <Footer />
    </div>
  );
}
