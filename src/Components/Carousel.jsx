import { useState } from "react";

import forward from "../assets/forward1.png";
import back from "../assets/backward1.png";
// import goBack from "../assets/back.svg";

const slides = [
  {
    id: 1,
    img: "/images/Hira.png",
    project: "1",
    title: "Hira",
    description: "Personal Japanese learning website.",
  },
  {
    id: 2,
    img: "/images/img6.png",
    project: "2",
    title: "IRCTC redesign",
    description: "Front-end redesign of IRCTC website",
  },
  {
    id: 3,
    img: "/images/img3.png",
    project: "3",
    title: "JioCinema",
    description: "Front-end clone of JioCinema",
  },
  {
    id: 4,
    img: "/images/img2.png",
    project: "4",
    title: "Login Page",
    description: "Sample design for login page",
  },
  {
    id: 5,
    img: "/images/img4.png",
    project: "5",
    title: "Contact Form",
    description: "Sample contact form (via Gmail)",
  },
];

export default function ExactFlowCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const next = () => {
    if (activeIndex < slides.length - 1) {
      setActiveIndex((i) => i + 1);
    }
  };

  const prev = () => {
    if (activeIndex > 0) {
      setActiveIndex((i) => i - 1);
    }
  };

  const isOdd = activeIndex % 2 === 0;

  let leftImg, rightImg;

  if (isOdd) {
    leftImg = slides[activeIndex];
    rightImg = slides[activeIndex + 1];
  } else {
    leftImg = slides[activeIndex + 1];
    rightImg = slides[activeIndex];
  }

  const leftActive = isOdd;
  const rightActive = !isOdd;

  return (
    <div className="h-screen overflow-hidden">
      {/* <header>
        <nav className="flex flex-row items-center gap-3 fixed p-4">
          <a
            href="/"
            id="back"
            className="p-px w-7 h-7 rounded-2xl text-2xl font-semibold text-black flex items-center justify-center"
          >
            <img src={goBack} alt="" className="" />
          </a>
        </nav>
      </header> */}

      <div className="flex flex-col justify-center items-center h-[75%] roboto-slab-regular">
        <div className="mb-16 text-center">
          {/* Appear on scroll */}
          <h1 className="text-5xl md:text-[4rem] font-semibold">My Works</h1>
        </div>
        <div className="flex gap-15 items-center justify-center">
          {/* LEFT */}
          <div
            className={`relative border-2 border-white/25 rounded-2xl overflow-hidden transition-all duration-[0.4s] ease ${
              leftActive
                ? "opacity-100 filter-none shadow-[0_30px_80px_rgba(0,0,0,0.6)] w-130 h-80"
                : "opacity-[0.35] blur-[2px] grayscale-[0.7] w-62.5 h-55"
            }`}
          >
            {leftImg && (
              <img
                src={leftImg.img}
                alt={leftImg.title}
                className="w-full h-full object-cover"
              />
            )}

            {/* CONTENT — only when active */}
            {leftActive && leftImg && (
              <div className="absolute inset-0 bg-black/40 p-5 flex flex-col justify-end">
                <p className="text-xs tracking-widest text-white/70">
                  PROJECT {leftImg.project}
                </p>
                <h2 className="text-2xl font-semibold text-white">
                  {leftImg.title}
                </h2>
                <p className="text-sm text-white/80 mt-1">
                  {leftImg.description}
                </p>

                <a
                  href="#"
                  className="mt-3 inline-block bg-white text-black text-xs px-4 py-2 rounded-full w-max"
                >
                  GitHub →
                </a>
              </div>
            )}
          </div>

          {/* RIGHT */}
          <div
            className={`relative border-2 border-white/25 rounded-2xl overflow-hidden transition-all duration-[0.4s] ease ${
              rightActive
                ? "opacity-100 filter-none shadow-[0_30px_80px_rgba(0,0,0,0.6)] w-130 h-80"
                : "opacity-[0.35] blur-[2px] grayscale-[0.7] w-62.5 h-55"
            }`}
          >
            {rightImg && (
              <img
                src={rightImg.img}
                alt={rightImg.title}
                className="w-full h-full object-cover"
              />
            )}

            {/* CONTENT — only when active */}
            {rightActive && rightImg && (
              <div className="absolute inset-0 bg-black/40 p-5 flex flex-col justify-end">
                <p className="text-xs tracking-widest text-white/70">
                  PROJECT {rightImg.project}
                </p>
                <h2 className="text-2xl font-semibold text-white">
                  {rightImg.title}
                </h2>
                <p className="text-sm text-white/80 mt-1">
                  {rightImg.description}
                </p>

                <a
                  href="#"
                  className="mt-3 inline-block bg-white text-black text-xs px-4 py-2 rounded-full w-max"
                >
                  GitHub →
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex gap-5 items-center w-screen justify-center">
        <button
          onClick={prev}
          disabled={activeIndex === 0}
          className="border-2 font-semibold w-12 h-12 rounded-2xl cursor-pointer flex items-center justify-center"
        >
          <img src={back} alt="" className="rounded-2xl" />
          {/* &lt; */}
        </button>
        <button
          onClick={next}
          disabled={activeIndex >= slides.length - 1}
          className="border-2 font-semibold w-12 h-12 rounded-2xl cursor-pointer flex items-center justify-center"
        >
          <img src={forward} alt="next" className="rounded-2xl" />
          {/* &gt; */}
        </button>
      </div>
    </div>
  );
}
