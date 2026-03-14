import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import Profile from "./components/Profile";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import { Toaster } from "sonner";

function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.add("light");
    } else {
      document.body.classList.remove("light");
    }
  }, [isLightMode]);

  const toggleTheme = () => {
    setIsLightMode(!isLightMode);
  };

  return (
    <>
      <Toaster richColors position="bottom-right" theme={isLightMode ? 'light' : 'dark'} />
      <Navbar isLightMode={isLightMode} toggleTheme={toggleTheme} />
      <Hero />
      <div className="main-container">
        <Sidebar />
        <div className="content">
          <Profile />
          <div style={{ height: "1.5rem" }}></div>
          <Experience />
          <div style={{ height: "1.5rem" }}></div>
          <Education />
          <div style={{ height: "1.5rem" }}></div>
          <Skills />
          <div style={{ height: "1.5rem" }}></div>
          <Projects />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
