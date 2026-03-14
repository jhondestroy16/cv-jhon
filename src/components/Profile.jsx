import React from "react";
import { cvData } from "../data/cvData";
import Reveal from "./Reveal";

const Profile = () => {
  // Words/phrases to highlight in the profile text
  const highlights = [
    "más de 3 años de experiencia",
    "sector gubernamental y tributario",
    "Laravel",
    "Vue.js",
    "Especialización en Ingeniería de Software",
    "Java y Spring Boot",
    "liderazgo técnico",
    "arquitectura de software",
    "sistemas web críticos",
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
