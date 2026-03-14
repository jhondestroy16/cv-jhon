import React from "react";
import { cvData } from "../data/cvData";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const Projects = () => {
  if (!cvData.projects || cvData.projects.length === 0) return null;

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Reveal className="glass-card" id="proyectos">
      <div className="section-title">
        <div className="icon-wrapper">
          <i className="fas fa-rocket"></i>
        </div>
        Proyectos Destacados
      </div>
      <motion.div
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {cvData.projects.map((project, index) => (
          <motion.div className="project-card" key={index} variants={itemVariants}>
            <div className="project-header">
              <div className="project-name">
                <i className="fas fa-folder-open project-icon"></i>
                {project.name}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-link"
                  title="Ver repositorio"
                >
                  <i className="fas fa-external-link-alt"></i>
                </a>
              )}
            </div>
            <p className="project-description">{project.description}</p>
            <div className="timeline-tags">
              {project.tags.map((tag, tagIndex) => (
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

export default Projects;
