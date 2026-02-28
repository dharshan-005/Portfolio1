import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

// import Sidebar from "./Components/Sidebar";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./pages/About";
// import Projects from "./pages/Projects";

import Snowfall from "react-snowfall";
import Carousel from "./Components/Carousel";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import GsapAnimate from "./Components/gsap";

import Lenis from "lenis";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Project from "./pages/Project";

const App = () => {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved === "dark" : true;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    lenis.on("scroll", ScrollTrigger.update);

    return () => lenis.destroy();
  }, []);

  return (
    <>
      {/* <Snowfall color="#ff7300" /> bg-[linear-gradient(120deg,#dbeafe,#eef2ff)]*/}
      <div className="bg-neutral-200 text-black dark:bg-[linear-gradient(120deg,#000000,#000000)] dark:text-white min-h-screen transition-colors duration-300">
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                  <div className="">
                    <section id="home" className="min-h-screen">
                      <Home />
                    </section>
                    <section id="about" className="min-h-screen pt-10">
                      <About />
                    </section>
                    <section id="service" className="min-h-screen pt-10">
                      <Service />
                    </section>
                    <section id="project" className="min-h-screen pt-10">
                      <Project />
                    </section>
                    {/* <section>
                      <Carousel />
                    </section> */}
                    <section id="contact" className="min-h-screen pt-10">
                      <Contact />
                    </section>
                  </div>
                </>
              }
            />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
