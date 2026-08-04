import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiArrowUp, FiMail } from "react-icons/fi";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/dharshan-005",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/dharshan-vk/",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:vkdharshan38@gmail.com",
    icon: FiMail,
  },
];

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="footer-section">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">Dharshan</span>
          <p className="footer-tagline">
            Building things for the web, one project at a time.
          </p>
        </div>

        <div className="footer-socials">
          {socials.map((social) => {
            const Icon = social.icon;

            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link"
                aria-label={social.label}
              >
                <Icon />
              </a>
            );
          })}
        </div>

        <button
          type="button"
          onClick={scrollToTop}
          className="footer-top-btn"
          aria-label="Back to top"
        >
          <FiArrowUp />
        </button>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Dharshan. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
