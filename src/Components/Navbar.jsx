import React, { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import home from "../assets/home1.png";
import home1 from "../assets/home.png";
import about from "../assets/idCard1.png";
import about1 from "../assets/idCard.png";
import service from "../assets/service.png";
import service1 from "../assets/service1.png";
import resume from "../assets/resume1.png";
import resume1 from "../assets/resume.png";
import contact from "../assets/addressBook1.png";
import contact1 from "../assets/addressBook.png";

const sections = ["home", "about", "service", "resume", "contact"];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach((id) => {
        const section = document.getElementById(id);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          current = id;
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const iconClass = (id) =>
    `w-6 transition-all duration-300 ${
      activeSection === id
        ? "scale-125 -translate-y-1"
        : "opacity-60 hover:opacity-100 hover:-translate-y-1"
    }`;

  return (
    <>
      <div className="fixed bottom-4 flex w-full justify-center z-50">
        <div className="flex gap-8 px-6 py-3 rounded-2xl border backdrop-blur-md bg-white/80 dark:bg-black/80 items-center transition-colors duration-300">
          <a href="#home">
            {darkMode ? (
              <img src={home} alt="" className={iconClass("home")} />
            ) : (
              <img src={home1} className={iconClass("home")} />
            )}
          </a>
          <a href="#about">
            {darkMode ? (
              <img src={about} alt="" className={iconClass("about")} />
            ) : (
              <img src={about1} alt="" className={iconClass("about")} />
            )}
          </a>
          <a href="#service">
            {darkMode ? (
              <img src={service} alt="" className={iconClass("service")} />
            ) : (
              <img src={service1} alt="" className={iconClass("service")} />
            )}
          </a>
          <a href="">
            {darkMode ? (
              <img src={resume} alt="" className={iconClass("")} />
            ) : (
              <img src={resume1} alt="" className={iconClass("")} />
            )}
          </a>
          <a href="">
            {darkMode ? (
              <img src={contact} alt="" className={iconClass("")} />
            ) : (
              <img src={contact1} alt="" className={iconClass("")} />
            )}
          </a>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-2 hover:scale-110 transition cursor-pointer"
          >
            {!darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* <button onClick={() => setDarkMode((prev) => !prev)} className="ml-2">
            Toggle
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
