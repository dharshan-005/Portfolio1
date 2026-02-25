import React, { useState } from "react";

import me from "../assets/me2.jpg";

const About = () => {
  const [activeTab, setActiveTab] = useState("skills");

  return (
    <>
      <section className="max-w-6xl mx-auto px-6 py-12 zen-antique-soft-regular">
        <div className="mb-16 text-center">
          {/* Appear on scroll */}
          <h1 className="text-5xl md:text-[4rem] font-semibold">About Me?</h1>
        </div>

        <div className="grid md:grid-cols-2 gap-4 items-start">
          <div className="flex justify-center md:justify-start">
            {/* From center to left on scroll */}
            <img
              src={me}
              alt="Dharshan"
              className="w-72 h-98 object-cover rounded-2xl shadow-lg"
            />
          </div>

          {/* Text */}
          {/* Appear after the img moved to left */}
          <div>
            <p className="text-lg text-gray-700 dark:text-white leading-relaxed mb-6">
              I'm <strong>Dharshan VK.</strong> An aspiring Full-Stack Developer
              with a strong foundation in modern web technologies, UI/UX
              principles, and scalable application development. Passionate about
              building efficient, user-centric digital solutions from concept to
              deployment. Continuously learning and adapting to new technologies
              to create impactful and reliable software experiences.
            </p>

            {/* Tabs */}
            <div className="flex gap-6 mb-3 text-sm font-medium">
              <p
                className={`cursor-pointer ${activeTab === "skills" ? "text-[#ff7300] border-b-2 border-[#ff7300]" : "text-gray-500 hover:text-white"}`}
                onClick={() => setActiveTab("skills")}
              >
                Skills
              </p>
              <p
                className={`cursor-pointer ${activeTab === "education" ? "text-[#ff7300] border-b-2 border-[#ff7300]" : "text-gray-500 hover:text-white"}`}
                onClick={() => setActiveTab("education")}
              >
                Education
              </p>
              <p
                className={`cursor-pointer ${activeTab === "languages" ? "text-[#ff7300] border-b-2 border-[#ff7300]" : "text-gray-500 hover:text-white"}`}
                onClick={() => setActiveTab("languages")}
              >
                Languages
              </p>
            </div>

            {activeTab === "skills" && (
              <div className="flex">
                <ul className="pl-3.75">
                  <li>
                    <span className="text-[14px] text-[#ff7300]">
                      Web Developement
                    </span>{" "}
                    - Designing Web Applications
                  </li>
                  <li>
                    <span className="text-[14px] text-[#ff7300]">
                      Photography
                    </span>{" "}
                    - Designing Web Applications
                  </li>
                  <li>
                    <span className="text-[14px] text-[#ff7300]">
                      UI/UX Developer
                    </span>{" "}
                    - Designing Web Applications
                  </li>
                </ul>
              </div>
            )}
            {activeTab === "education" && (
              <div className="flex">
                <ul className="pl-3.75">
                  <li>
                    <span className="text-[14px] text-[#ff7300]">
                      2024 - 2026
                    </span>{" "}
                    - B.E.ECE @SNS College Of Technology
                  </li>
                  <li>
                    <span className="text-[14px] text-[#ff7300]">
                      2021 - 2022
                    </span>{" "}
                    - HSC @Chandra Matriculation Hr. Sec. School
                  </li>
                  <li>
                    <span className="text-[14px] text-[#ff7300]">
                      2019 - 2020
                    </span>{" "}
                    - SSLC @Chandra Matriculation Hr. Sec. School
                  </li>
                </ul>
              </div>
            )}
            {activeTab === "languages" && (
              <div className="flex">
                <ul className="pl-3.75">
                  <li>
                    <span className="text-[14px]">Tamil</span>
                  </li>
                  <li>
                    <span className="text-[14px]">Japanese</span>
                  </li>
                  <li>
                    <span className="text-[14px]">Hindi</span>
                  </li>
                </ul>
              </div>
            )}

            {/* Tech Stack */}
            <div className="mt-5">
              <h3 className="text-lg font-semibold mb-2">Tech Stack Known</h3>
              <hr className="mb-4" />

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
