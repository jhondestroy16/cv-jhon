import React from "react";
import { cvData } from "../data/cvData";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <Reveal className="glass-card" id="experiencia">
      <div className="section-title">
        <div className="icon-wrapper">
          <i className="fas fa-briefcase"></i>
        </div>
        Experiencia Profesional
      </div>
      <motion.div 
        className="timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {cvData.experience.map((exp, index) => (
          <motion.div 
            className="timeline-item" 
            key={index}
            variants={itemVariants}
          >
            <div className="timeline-header">
              <div>
                <div className="timeline-company">{exp.company}</div>
                <div className="timeline-role">{exp.role}</div>
              </div>
              <span className="timeline-date">{exp.period}</span>
            </div>
            <div className="timeline-location">
              <i className="fas fa-map-marker-alt"></i> {exp.location}
            </div>
            <ul className="timeline-tasks">
              {exp.tasks.map((task, tIndex) => (
                <li key={tIndex}>{task}</li>
              ))}
            </ul>
            <div className="timeline-tags">
              {exp.tags.map((tag, tagIndex) => (
                <span className="timeline-tag" key={tagIndex}>
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Reveal>
  );
};

export default Experience;
