import React from "react";
import { cvData } from "../data/cvData";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const Education = () => {
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
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <Reveal className="glass-card" id="educacion">
      <div className="section-title">
        <div className="icon-wrapper">
          <i className="fas fa-graduation-cap"></i>
        </div>
        Educación
      </div>
      <motion.div 
        className="timeline"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {cvData.education.map((edu, index) => (
          <motion.div 
            className="timeline-item" 
            key={index}
            variants={itemVariants}
          >
            <div className="timeline-header">
              <div>
                <div className="timeline-company">
                  <i className={`fas fa-${edu.icon} edu-icon`}></i>
                  {edu.degree}
                </div>
                <div className="timeline-role">{edu.institution}</div>
              </div>
              <span className="timeline-date">{edu.period}</span>
            </div>
            {edu.details && (
              <ul className="timeline-tasks">
                {edu.details.map((detail, dIndex) => (
                  <li key={dIndex}>{detail}</li>
                ))}
              </ul>
            )}
          </motion.div>
        ))}
      </motion.div>
    </Reveal>
  );
};

export default Education;
