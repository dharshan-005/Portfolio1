import React from "react";
import { Link } from "react-router-dom";

import { FaInstagram, FaLinkedin, FaGithub, FaGit, FaEnvelope, FaCode, FaBriefcase, FaLaptopCode } from "react-icons/fa";

import TextType from "../pages/TextType";

const Home = () => {
  return (
    <section
      id="home"
      className="text-[60px] w-full pl-15 flex flex-col h-160 justify-end zen-antique-soft-regular"
    >
      <h1>I'm Dharshan VK</h1>

      <div className="flex gap-4">
        I'm a
        <TextType
          text={["Full-Stack Developer.", "Photographer.", "UI / UX Designer."]}
          typingSpeed={75}
          pauseDuration={1500}
          showCursor={true}
          cursorCharacter="_"
        />
      </div>

      <div className="mt-6">
        <Link
          to="/carousel"
          className="text-2xl underline hover:text-[#ff7300]"
        >
          My works →
        </Link>
      </div>

      {/* Icons */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 text-2xl">
        <a
          href=""
          target="_blank"
          rel="noopener norefferer"
          className="hover:text-[#ff7300] transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://www.linkedin.com/in/dharshan-vk/"
          target="_blank"
          rel="noopener norefferer"
          className="hover:text-[#ff7300] transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/dharshan-005"
          target="_blank"
          rel="noopener norefferer"
          className="hover:text-[#ff7300] transition"
        >
          <FaGithub />
        </a>
        {/* <a
          href="mailto:vkdharshan38@gmail.com?subject=Portfolio Inquiry"
          target="_blank"
          rel="noopener norefferer"
          className="hover:text-[#ff7300] transition"
        >
          <FaEnvelope />
        </a> */}

        <div className="w-0.5 h-32 bg-white/40 mt-2"></div>
      </div>
    </section>
  );
};

export default Home;

// Add social icons
