import React from "react";
import { cvData } from "../data/cvData";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const MONTH_NAMES = [
  "Ene", "Feb", "Mar", "Abr", "May", "Jun",
  "Jul", "Ago", "Sep", "Oct", "Nov", "Dic",
];

function formatPeriod(startDate, endDate) {
  const start = new Date(startDate + "T00:00:00");
  const end = endDate ? new Date(endDate + "T00:00:00") : new Date();

  const startLabel = `${MONTH_NAMES[start.getMonth()]} ${start.getFullYear()}`;
  const endLabel = endDate
    ? `${MONTH_NAMES[end.getMonth()]} ${end.getFullYear()}`
    : "Actualidad";

  return `${startLabel} – ${endLabel}`;
}

function calcDuration(startDate, endDate) {
  const start = new Date(startDate + "T00:00:00");
  const end = endDate ? new Date(endDate + "T00:00:00") : new Date();

  let months = (end.getFullYear() - start.getFullYear()) * 12
    + (end.getMonth() - start.getMonth());

  // Count the start month as a full month
  months = Math.max(months, 0) + 1;

  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years > 0 && remainingMonths > 0) {
    return `${years} año${years > 1 ? "s" : ""} ${remainingMonths} mes${remainingMonths > 1 ? "es" : ""}`;
  } else if (years > 0) {
    return `${years} año${years > 1 ? "s" : ""}`;
  } else {
    return `${remainingMonths} mes${remainingMonths > 1 ? "es" : ""}`;
  }
}

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
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
              <div className="timeline-date-group">
                <span className="timeline-date">
                  {formatPeriod(exp.startDate, exp.endDate)}
                </span>
                <span className="timeline-duration">
                  {calcDuration(exp.startDate, exp.endDate)}
                </span>
              </div>
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
