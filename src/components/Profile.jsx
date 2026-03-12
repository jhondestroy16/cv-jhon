import React from "react";
import { cvData } from "../data/cvData";
import Reveal from "./Reveal";

const Profile = () => {
  return (
    <Reveal className="glass-card" id="perfil">
      <div className="section-title">
        <div className="icon-wrapper">
          <i className="fas fa-user"></i>
        </div>
        Perfil Profesional
      </div>
      <div className="profile-text">
        {cvData.profile.map((paragraph, index) => {
          // Logic to highlight "Especialista en Ingeniería de Software", "tres años de experiencia", etc.
          // For simplicity, I'll just render paragraphs, but I could add specific logic if needed.
          // Let's try to match the original highlight style.
          const processedText = paragraph
            .replace(
              "Especialista en Ingeniería de Software",
              '<span class="profile-highlight">Especialista en Ingeniería de Software</span>'
            )
            .replace(
              "tres años de experiencia",
              '<span class="profile-highlight">tres años de experiencia</span>'
            )
            .replace(
              "Laravel",
              '<span class="profile-highlight">Laravel</span>'
            )
            .replace(
              "Java y Spring Boot",
              '<span class="profile-highlight">Java y Spring Boot</span>'
            )
            .replace(
              "liderazgo técnico",
              '<span class="profile-highlight">liderazgo técnico</span>'
            );

          return (
            <p
              key={index}
              dangerouslySetInnerHTML={{ __html: processedText }}
            />
          );
        })}
      </div>
    </Reveal>
  );
};

export default Profile;
