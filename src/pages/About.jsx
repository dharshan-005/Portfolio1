import React, { useEffect, useRef, useState } from "react";

import me from "../assets/me2.jpg";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");
  const aboutRef = useRef(null);

  useGSAP(
    () => {
      // const tl = gsap.timeline({ defaults: { ease: "power3.inOut" } });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          toggleActions: "restart pause reverse pause",
          start: "top top",
          // markers: true,
          end: "+=100%",
          pin: true,
          scrub: 1,
        },
      });

      tl.from(".abt-txt", {
        y: 40,
        opacity: 0,
        duration: 0.8,
      })
        .from(
          ".abt-img",
          {
            x: 40,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4",
        )
        .from(
          ".abt-para",
          {
            y: 60,
            opacity: 0,
            duration: 1,
          },
          "-=0.4",
        )
        .from(
          ".abt-tabs",
          {
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
          },
          "-=0.6",
        )
        .from(
          ".tab-details",
          {
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
          },
          "-=0.2",
        )
        .from(
          ".abt-tech",
          {
            y: 30,
            opacity: 0,
            stagger: 0.15,
            duration: 0.6,
          },
          "-=0.2",
        );
    },
    { scope: aboutRef },
  );

  return (
    <>
      <section
        ref={aboutRef}
        id="about"
        className="about max-w-6xl mx-auto px-6 py-12 playfair-display-regular"
      >
        <div className="mb-10 text-center">
          {/* Appear on scroll */}
          <h1
            id="text"
            className="abt-txt text-4xl md:text-6xl font-semibold tracking-tight"
          >
            About Me
          </h1>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="flex justify-center md:justify-start">
            {/* From center to left on scroll */}
            <img
              src={me}
              alt="Dharshan"
              className="abt-img w-40 md:w-80 md:h-105 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text */}
          {/* Appear after the img moved to left */}
          <div>
            <p className="abt-para md:text-lg leading-relaxed text-gray-600 dark:text-gray-300 mb-6">
              I'm <strong>Dharshan VK.</strong> An aspiring Full-Stack Developer
              with a strong foundation in modern web technologies, UI/UX
              principles, and scalable application development. Passionate about
              building efficient, user-centric digital solutions from concept to
              deployment. Continuously learning and adapting to new technologies
              to create impactful and reliable software experiences.
            </p>

            {/* Tabs */}
            <div className="abt-tabs flex gap-8 mb-4 text-[12px] md:text-sm font-medium pb-2">
              <p
                className={`pb-1 cursor-pointer transition ${activeTab === "skills" ? "text-[#ff7300] border-b-2 border-[#ff7300]" : "text-gray-500 hover:text-black dark:hover:text-white"}`}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </p>
              <p
                className={`pb-1 cursor-pointer transition ${activeTab === "education" ? "text-[#ff7300] border-b-2 border-[#ff7300]" : "text-gray-500 hover:text-black dark:hover:text-white"}`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </p>
              <p
                className={`pb-1 cursor-pointer transition ${activeTab === "languages" ? "text-[#ff7300] border-b-2 border-[#ff7300]" : "text-gray-500 hover:text-black dark:hover:text-white"}`}
                onClick={() => setActiveTab("languages")}
              >
                Languages
              </p>
            </div>

            {activeTab === "skills" && (
              <div className="tab-details flex">
                <ul className="pl-3.75 text-[13px] md:text-sm">
                  <li>
                    <span className="text-[#ff7300]">
                      Web Developement
                    </span>{" "}
                    - Designing Web Applications
                  </li>
                  <li>
                    <span className="text-[#ff7300]">
                      Photography
                    </span>{" "}
                    - Capturing visual Stories
                  </li>
                  <li>
                    <span className="text-[#ff7300]">
                      UI/UX Developer
                    </span>{" "}
                    - Designing User-Centered Interfaces
                  </li>
                </ul>
              </div>
            )}
            {activeTab === "education" && (
              <div className="tab-details flex">
                <ul className="pl-3.75">
                  <li>
                    <span className="text-[#ff7300]">
                      2024 - 2026
                    </span>{" "}
                    - B.E.ECE @SNS College Of Technology
                  </li>
                  <li>
                    <span className="text-[#ff7300]">
                      2021 - 2022
                    </span>{" "}
                    - HSC @Chandra Matriculation Hr. Sec. School
                  </li>
                  <li>
                    <span className="text-[#ff7300]">
                      2019 - 2020
                    </span>{" "}
                    - SSLC @Chandra Matriculation Hr. Sec. School
                  </li>
                </ul>
              </div>
            )}
            {activeTab === "languages" && (
              <div className="tab-details flex">
                <ul className="pl-3.75">
                  <li>
                    <span className="">Tamil</span>
                  </li>
                  <li>
                    <span className="">Japanese</span>
                  </li>
                  <li>
                    <span className="">Hindi</span>
                  </li>
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div className="abt-tech mt-10">
              <h3 className="text-lg font-semibold mb-2">Tech Stack Known</h3>
              <hr className="mb-4 border-gray-700/75" />

              <div className="flex flex-wrap gap-3">
                {[
                  "React",
                  "JavaScript",
                  "Tailwind CSS",
                  "HTML",
                  "CSS",
                  "Git",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 rounded-full dark:bg-gray-700 bg-gray-100 text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
