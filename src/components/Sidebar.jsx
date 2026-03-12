import React from "react";
import { cvData } from "../data/cvData";
import Reveal from "./Reveal";
import { toast } from "sonner";

const Sidebar = () => {
  const handleCopy = (text, label) => {
    navigator.clipboard.writeText(text);
    toast.success(`${label} copiado al portapapeles`);
  };

  return (
    <aside className="sidebar">
      {/* Contacto */}
      <Reveal className="glass-card" delay={0.1}>
        <div className="section-title">
          <div className="icon-wrapper">
            <i className="fas fa-address-card"></i>
          </div>
          Contacto
        </div>
        <ul className="contact-list">
          <li 
            className="contact-item" 
            style={{ cursor: 'pointer' }}
            onClick={() => handleCopy(cvData.personal.whatsapp, "WhatsApp")}
          >
            <div className="contact-icon whatsapp">
              <i className="fab fa-whatsapp"></i>
            </div>
            <div className="contact-info">
              <span className="contact-label">WhatsApp</span>
              <span className="contact-value">
                {cvData.personal.whatsapp}
              </span>
            </div>
          </li>
          <li 
            className="contact-item" 
            style={{ cursor: 'pointer' }}
            onClick={() => handleCopy(cvData.personal.email, "Email")}
          >
            <div className="contact-icon email">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="contact-info">
              <span className="contact-label">Email</span>
              <span className="contact-value">
                {cvData.personal.email}
              </span>
            </div>
          </li>
          <li className="contact-item">
            <div className="contact-icon location">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="contact-info">
              <span className="contact-label">Ubicación</span>
              <span className="contact-value">{cvData.personal.location}</span>
            </div>
          </li>
          <li className="contact-item">
            <div className="contact-icon github">
              <i className="fab fa-github"></i>
            </div>
            <div className="contact-info">
              <span className="contact-label">GitHub</span>
              <span className="contact-value">
                <a href={cvData.personal.githubLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                  {cvData.personal.github}
                </a>
              </span>
            </div>
          </li>
          <li className="contact-item">
            <div className="contact-icon linkedin">
              <i className="fab fa-linkedin-in"></i>
            </div>
            <div className="contact-info">
              <span className="contact-label">LinkedIn</span>
              <span className="contact-value">
                <a href={cvData.personal.linkedinLink} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                  {cvData.personal.linkedin}
                </a>
              </span>
            </div>
          </li>
        </ul>
      </Reveal>

      {/* Idiomas */}
      <Reveal className="glass-card" delay={0.25}>
        <div className="section-title">
          <div className="icon-wrapper">
            <i className="fas fa-language"></i>
          </div>
          Idiomas
        </div>
        {cvData.languages.map((lang, index) => (
          <div className="language-item" key={index}>
            <span className="language-name">
              {lang.flag} {lang.name}
            </span>
            <span className="language-level">{lang.level}</span>
          </div>
        ))}
      </Reveal>

      {/* Competencias */}
      <Reveal className="glass-card" delay={0.4}>
        <div className="section-title">
          <div className="icon-wrapper">
            <i className="fas fa-puzzle-piece"></i>
          </div>
          Competencias
        </div>
        <ul className="soft-skills-list">
          {cvData.competencies.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </Reveal>
    </aside>
  );
};

export default Sidebar;
