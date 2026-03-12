import React from "react";
import { cvData } from "../data/cvData";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

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

  return (
    <motion.div className="skill-card" variants={itemVariants}>
      <i className={skill.icon} style={skill.customStyle || {}}></i>
      <span className="skill-name">{skill.name}</span>
      <div className="skill-bar">
        <motion.div
          className="skill-fill"
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        ></motion.div>
      </div>
      <span className="skill-percent">{skill.level}%</span>
    </motion.div>
  );
};

export default Skills;
