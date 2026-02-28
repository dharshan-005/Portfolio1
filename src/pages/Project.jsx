import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";

import Hira from "/images/Hira.png";
import Cartify from "/images/Cartify.png";
import GeoVault from "/images/GeoVault.png";

const Project = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(".pjt-arrow", {
      x: 12,
      duration: 0.8,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: ".pjt-title-slide",
        start: "top center",
        end: "bottom center",
        toggleActions: "play pause play pause",
      },
    });

    const scrollSection = document.querySelectorAll(".scroll-section");

    scrollSection.forEach((section) => {
      //   const wrapper = section.querySelector(".pjt-wrapper");
      const items = section.querySelectorAll(".pjt-item");

      let directions = null;

      if (section.classList.contains("horizontal-section")) {
        directions = "horizontal";
      } else {
        directions = "vertical";
      }

      initScroll(section, items, directions);
    });

    function initScroll(section, items, directions) {
      items.forEach((item, index) => {
        if (index !== 0) {
          directions == "horizontal"
            ? gsap.set(item, { xPercent: 100 })
            : gsap.set(item, { yPercent: 100 });
        }
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          pin: true,
          start: "top top",
          end: () => `+=${items.length * 120 + 200}%`,
          scrub: 1,
          invalidateOnRefresh: true,
          // markers: true,
        },
        defaults: { ease: "none" },
      });

      items.forEach((item, index) => {
        tl.to(item, {
          scale: 0.9,
          borderRadius: "10px",
        });

        const nextItem = items[index + 1];

        if (!nextItem) return;

        directions == "horizontal"
          ? tl.to(
              items[index + 1],
              {
                xPercent: 0,
              },
              "<",
            )
          : tl.to(
              items[index + 1],
              {
                yPercent: 0,
              },
              "<",
            );
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="main-wrapper">
      <div className="scroll-section horizontal-section pjt-section">
        <div className="pjt-wrapper">
          <div role="list" className="pjt-list">
            <div role="listitem" className="pjt-item pjt-title-slide">
              <h1 className="pjt-heading">Projects</h1>
              <div className="pjt-scroll">
                <p className="flex items-center gap-2">
                  Scroll
                  <FiArrowRight className="pjt-arrow" />
                </p>
              </div>
            </div>

            {/* Hira */}
            <div role="listitem" className="pjt-item">
              <div className="pjt-card">
                <div className="pjt-card-header">
                  <div className="pjt-item_number">1</div>

                  <h2 className="pjt-title">Hira</h2>

                  <a
                    href="https://github.com/yourusername/hira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pjt-github"
                  >
                    GitHub <FiArrowRight />
                  </a>
                </div>

                <div className="pjt-card-image">
                  <img src={Hira} alt="Hira Project" />
                </div>

                <div className="pjt-card-body">
                  <p>
                    Interactive Japanese learning website designed to help
                    beginners practice Hiragana, Katakana, and vocabulary
                    through quizzes and structured lessons.
                  </p>

                  <p className="tech">React • CSS • JavaScript</p>
                </div>
              </div>
            </div>

            {/* Cartify */}
            <div role="listitem" className="pjt-item">
              <div className="pjt-card">
                <div className="pjt-card-header">
                  <div className="pjt-item_number">2</div>

                  <h2 className="pjt-title">Cartify</h2>

                  <a
                    href="https://github.com/yourusername/hira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pjt-github"
                  >
                    GitHub <FiArrowRight />
                  </a>
                </div>

                <div className="pjt-card-image">
                  <img src={Cartify} alt="Cartify Project" />
                </div>

                <div className="pjt-card-body">
                  <p>
                    Full-stack e-commerce web application built using the MERN
                    stack with features like product listing, shopping cart,
                    user authentication, and responsive UI for seamless online
                    shopping.
                  </p>

                  <p className="tech">MongoDB • Express • React • Node.js</p>
                </div>
              </div>
            </div>

            {/* GeoVault */}
            <div role="listitem" className="pjt-item">
              <div className="pjt-card">
                <div className="pjt-card-header">
                  <div className="pjt-item_number">3</div>

                  <h2 className="pjt-title">GeoVault</h2>

                  <a
                    href="https://github.com/yourusername/hira"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pjt-github"
                  >
                    GitHub <FiArrowRight />
                  </a>
                </div>

                <div className="pjt-card-image">
                  <img src={GeoVault} alt="Hira Project" />
                </div>

                <div className="pjt-card-body">
                  <p>
                    Community-driven location sharing platform where users can
                    add, edit, and explore known places uploaded by others
                    through an interactive interface.
                  </p>

                  <p className="tech">React • Node.js • MongoDB</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Project;
