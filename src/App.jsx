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

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    const root = document.documentElement;
    darkMode ? root.classList.add("dark") : root.classList.remove("dark");
  }, [darkMode]);

  return (
    <>
      {/* <Snowfall color="#ff7300" /> */}
      <div className="bg-[linear-gradient(120deg,#dbeafe,#eef2ff)] text-black dark:bg-[linear-gradient(120deg,#000000,#000000)] dark:text-white min-h-screen transition-colors duration-300">
        <div>
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
                  <div className="ml-8">
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
                      <Carousel />
                    </section>
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
