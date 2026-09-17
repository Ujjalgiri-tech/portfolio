import { useEffect, useRef, useState } from "react";
import { HiMenu } from "react-icons/hi";
import OverlayMenu from "./OverlayMenu";
import Logo from "../assets/Logo.png";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScrollY = useRef(0);
  const timerId = useRef(null);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY === 0) {
        setVisible(true);
        return;
      }

      if (currentScrollY > lastScrollY.current) {
        setVisible(false);
        if (timerId.current) clearTimeout(timerId.current);
      } else {
        setVisible(true);
        if (timerId.current) clearTimeout(timerId.current);

        timerId.current = setTimeout(() => {
          if (window.scrollY !== 0) setVisible(false);
        }, 3000);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timerId.current) clearTimeout(timerId.current);
    };
  }, []);

  return (
    <>
      <header
        className={`p-2 transition-transform duration-300 fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${
          visible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center gap-4">
          <img src={Logo} alt="logo" className="w-8 h-8 rounded-md ml-1" />

          <div className="text-2xl font-bold text-white">Ujjal</div>

          
          <nav className="hidden md:flex flex-1 justify-center gap-25 text-white font-semibold">
            <button onClick={() => scrollToSection("home")}>Home</button>
            <button onClick={() => scrollToSection("about")}>About</button>
            <button onClick={() => scrollToSection("skills")}>Skills</button>
            <button onClick={() => scrollToSection("projects")}>Projects</button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </nav>

          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden text-white ml-auto"
          >
            <HiMenu size={32} />
          </button>
        </div>
      </header>

      <OverlayMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}
