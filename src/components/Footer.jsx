import React from "react";
import { cvData } from "../data/cvData";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" id="contacto">
      <div className="footer-content">
        <a href={cvData.personal.githubLink} target="_blank" rel="noreferrer" title="GitHub">
          <i className="fab fa-github"></i>
        </a>
        <a href={cvData.personal.linkedinLink} target="_blank" rel="noreferrer" title="LinkedIn">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href={cvData.personal.whatsappLink} target="_blank" rel="noreferrer" title="WhatsApp">
          <i className="fab fa-whatsapp"></i>
        </a>
        <a href={`mailto:${cvData.personal.email}`} title="Email">
          <i className="fas fa-envelope"></i>
        </a>
      </div>
      <p>© {currentYear} {cvData.personal.name} · Todos los derechos reservados</p>
    </footer>
  );
};

export default Footer;
