import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ isLightMode, toggleTheme }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Active section logic
      const sectionIds = ["hero", "perfil", "experiencia", "educacion", "habilidades", "contacto"];
      let current = "";
      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.getBoundingClientRect().top <= 160) {
          current = id;
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Perfil", href: "#perfil", icon: "user" },
    { name: "Experiencia", href: "#experiencia", icon: "briefcase" },
    { name: "Educación", href: "#educacion", icon: "graduation-cap" },
    { name: "Habilidades", href: "#habilidades", icon: "code" },
    { name: "Contacto", href: "#contacto", icon: "address-card" },
  ];

  return (
    <>
      <nav id="mainNav" className={isScrolled ? "scrolled" : ""}>
        <div className="nav-inner">
          <span className="nav-logo" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ cursor: 'pointer' }}>JV</span>
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={activeSection === link.href.substring(1) ? "active" : ""}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="nav-right">
            <button id="toggleMode" title="Cambiar tema" onClick={toggleTheme}>
              {isLightMode ? "☀️" : "🌙"}
            </button>
            <button className="menu-btn" onClick={() => setIsMenuOpen(true)}>
              <i className="fas fa-bars"></i>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <div className="mobile-menu">
            <motion.div 
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div 
              className="mobile-menu-content"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              <button className="mobile-menu-close" onClick={() => setIsMenuOpen(false)}>
                <i className="fas fa-times"></i>
              </button>
              
              <ul className="mobile-nav-links">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className={activeSection === link.href.substring(1) ? "active" : ""}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <i className={`fas fa-${link.icon}`}></i>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
