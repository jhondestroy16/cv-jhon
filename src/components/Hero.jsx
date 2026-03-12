import React, { useState, useEffect, useRef } from "react";
import { cvData } from "../data/cvData";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const canvasRef = useRef(null);

  // Typewriter Effect
  useEffect(() => {
    const phrases = cvData.phrases;
    const currentFullText = phrases[phraseIdx];

    const type = () => {
      if (isDeleting) {
        setDisplayText(currentFullText.substring(0, charIdx - 1));
        setCharIdx((prev) => prev - 1);
      } else {
        setDisplayText(currentFullText.substring(0, charIdx + 1));
        setCharIdx((prev) => prev + 1);
      }

      let speed = isDeleting ? 40 : 80;

      if (!isDeleting && charIdx === currentFullText.length) {
        speed = 2000;
        setIsDeleting(true);
      } else if (isDeleting && charIdx === 0) {
        setIsDeleting(false);
        setPhraseIdx((prev) => (prev + 1) % phrases.length);
        speed = 500;
      }

      setTimeout(type, speed);
    };

    const timer = setTimeout(type, isDeleting ? (charIdx === currentFullText.length ? 2000 : 40) : 80);
    return () => clearTimeout(timer);
  }, [charIdx, isDeleting, phraseIdx]);

  // Particles Effect
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let particles = [];
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
    };

    const createParticles = () => {
      particles = [];
      const count = Math.floor((canvas.width * canvas.height) / 12000);
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          r: Math.random() * 1.5 + 0.5,
          dx: (Math.random() - 0.5) * 0.4,
          dy: (Math.random() - 0.5) * 0.4,
          opacity: Math.random() * 0.5 + 0.1,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.dx;
        p.y += p.dy;
        if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(129, 140, 248, ${p.opacity})`;
        ctx.fill();
      });
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    createParticles();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      createParticles();
    });

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <header className="hero" id="hero">
      <div className="hero-bg">
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <canvas className="particles-canvas" ref={canvasRef}></canvas>
      </div>
      <div className="hero-content">
        <img className="hero-avatar" src={cvData.personal.avatar} alt={`Foto de ${cvData.personal.name}`} />
        <h1>{cvData.personal.name}</h1>
        <span className="hero-title-accent">{cvData.personal.title}</span>
        <div>
          <span id="typewriter">{displayText}</span>
          <span className="typewriter-cursor"></span>
        </div>
        <div className="hero-social">
          <a href={cvData.personal.githubLink} target="_blank" className="gh" title="GitHub">
            <i className="fab fa-github"></i>
          </a>
          <a href={cvData.personal.linkedinLink} target="_blank" className="li" title="LinkedIn">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href={cvData.personal.whatsappLink} target="_blank" className="wa" title="WhatsApp">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href={`mailto:${cvData.personal.email}`} className="em" title="Email">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <i className="fas fa-chevron-down"></i>
      </div>
    </header>
  );
};

export default Hero;
