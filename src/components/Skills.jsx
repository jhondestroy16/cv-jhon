import React from "react";
import { cvData } from "../data/cvData";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const categoryColors = {
  Avanzado: {
    bg: "rgba(34, 197, 94, 0.12)",
    border: "rgba(34, 197, 94, 0.25)",
    text: "#4ade80",
  },
  Intermedio: {
    bg: "rgba(99, 102, 241, 0.12)",
    border: "rgba(99, 102, 241, 0.25)",
    text: "#818cf8",
  },
  Básico: {
    bg: "rgba(148, 163, 184, 0.1)",
    border: "rgba(148, 163, 184, 0.2)",
    text: "#94a3b8",
  },
};

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <Reveal className="glass-card" id="habilidades">
      <div className="section-title">
        <div className="icon-wrapper">
          <i className="fas fa-code"></i>
        </div>
        Habilidades Técnicas
      </div>
      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {cvData.skills.map((skill, index) => (
          <SkillCard key={index} skill={skill} />
        ))}
      </motion.div>
    </Reveal>
  );
};

const SkillCard = ({ skill }) => {
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  };

  const colors = categoryColors[skill.category] || categoryColors["Básico"];

  return (
    <motion.div className="skill-card" variants={itemVariants}>
      <i className={skill.icon} style={skill.customStyle || {}}></i>
      <span className="skill-name">{skill.name}</span>
      <span
        className="skill-category"
        style={{
          background: colors.bg,
          border: `1px solid ${colors.border}`,
          color: colors.text,
        }}
      >
        {skill.category}
      </span>
    </motion.div>
  );
};

export default Skills;
