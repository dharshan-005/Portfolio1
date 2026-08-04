import React, { useEffect, useState } from "react";
import {
  Home,
  User,
  Briefcase,
  FolderKanban,
  Mail,
  Moon,
  Sun,
} from "lucide-react";

const sections = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "service", icon: Briefcase, label: "Services" },
  { id: "project", icon: FolderKanban, label: "Projects" },
  { id: "contact", icon: Mail, label: "Contact" },
];

const Navbar = ({ darkMode, setDarkMode }) => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      let current = "home";

      sections.forEach(({ id }) => {
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

  const iconWrapperClass = (id) =>
    `transition-all duration-300 ${
      activeSection === id
        ? "scale-125 -translate-y-1 text-black dark:text-white"
        : "opacity-60 hover:opacity-100 hover:-translate-y-1 text-black dark:text-white"
    }`;

  return (
    <div className="fixed bottom-4 flex w-full justify-center z-50">
      <div className="flex gap-5 md:gap-8 px-4 md:px-6 py-3 rounded-2xl border backdrop-blur-md bg-white/80 dark:bg-black/80 items-center transition-colors duration-300">
        {sections.map((section) => {
          const Icon = section.icon;

          return (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-label={section.label}
            >
              <Icon size={22} className={iconWrapperClass(section.id)} />
            </a>
          );
        })}

        <button
          onClick={() => setDarkMode(!darkMode)}
          className="hover:scale-110 transition cursor-pointer"
          aria-label="Toggle dark mode"
        >
          {!darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
