import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";

import sharkImage from "./assets/shark.jpg";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Message from "./components/Message";

function App() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="relative">
      <div
        className="fixed top-0 left-0 w-full h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${sharkImage})` }}
      >
        <div className="absolute inset-0 bg-black opacity-60" />
      </div>
      <div className="relative z-10">
        <Navbar toggleTheme={toggleTheme} theme={theme} />
        <Hero />
        <Services />
        <Projects />
        <Skills />
        <Message />
        <Footer />
      </div>
    </div>
  );
}

export default App;
