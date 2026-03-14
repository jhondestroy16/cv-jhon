import React from "react";
import { cvData } from "../data/cvData";
import Reveal from "./Reveal";

const Profile = () => {
  // Words/phrases to highlight in the profile text
  const highlights = [
    "Desarrollador Full Stack",
    "Especialista en Sistemas Críticos",
    "más de 3 años de experiencia",
    "alta disponibilidad",
    "Laravel",
    "Vue.js",
    "PHP",
    "PostgreSQL",
    "MySQL",
    "Ingeniería de Software",
    "Java",
    "Spring Boot",
    "arquitectura de software",
    "liderazgo técnico"
  ];

  const highlightText = (text) => {
    let result = text;
    highlights.forEach((phrase) => {
      result = result.replace(
        phrase,
        `<span class="profile-highlight">${phrase}</span>`
      );
    });
    return result;
  };

  return (
    <Reveal className="glass-card" id="perfil">
      <div className="section-title">
        <div className="icon-wrapper">
          <i className="fas fa-user"></i>
        </div>
        Perfil Profesional
      </div>
      <div className="profile-text">
        {cvData.profile.map((paragraph, index) => (
          <p
            key={index}
            dangerouslySetInnerHTML={{ __html: highlightText(paragraph) }}
          />
        ))}
      </div>
    </Reveal>
  );
};

export default Profile;
