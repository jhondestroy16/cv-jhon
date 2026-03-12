import React from "react";
import { motion } from "framer-motion";

const Reveal = ({ 
  children, 
  className = "", 
  variant = "fadeUp", 
  delay = 0, 
  duration = 0.5,
  ...props 
}) => {
  const variants = {
    fadeUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0 }
    },
    fadeIn: {
      hidden: { opacity: 0 },
      visible: { opacity: 1 }
    },
    scaleUp: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { opacity: 1, scale: 1 }
    }
  };

  return (
    <motion.div
      variants={variants[variant]}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.16, 1, 0.3, 1] 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
