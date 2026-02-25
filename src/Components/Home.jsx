import React, { useState } from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import Dharshan from "../assets/Dharshan-gemini.png";
import TextType from "../pages/TextType";

import resume from "../assets/Dharshan_Resume.pdf"

const Home = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center px-6 md:px-16 zen-antique-soft-regular">

      {/* LEFT — LOGO */}
      <div className="absolute left-6 md:left-12 top-8">
        <div className="text-xl md:text-2xl font-bold tracking-widest">
          <span className="text-white">Dharshan</span>
          <span className="text-orange-500">.</span>
        </div>
      </div>


      {/* RIGHT — RESUME + ICONS */}
      <div className="absolute right-6 md:right-12 top-8 flex flex-col items-end gap-10">

        {/* Resume Button */}
        <button
          onClick={() => setShowResume(true)}
          className="
            border border-orange-500
            text-orange-500
            px-5 py-2
            rounded-lg
            hover:bg-orange-500 hover:text-white
            transition
          "
        >
          Resume
        </button>

        {/* Icons */}
        <div className="flex flex-col items-center gap-6 text-2xl">
          <a href="#" className="hover:text-orange-500 transition">
            <FaInstagram />
          </a>

          <a
            href="https://www.linkedin.com/in/dharshan-vk/"
            className="hover:text-orange-500 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="https://github.com/dharshan-005"
            className="hover:text-orange-500 transition"
          >
            <FaGithub />
          </a>

          <div className="w-0.5 h-32 bg-white/40"></div>
        </div>

      </div>


      {/* CENTER — HERO CONTENT */}
      <div className="flex flex-col md:flex-row items-center gap-12">

        {/* TEXT */}
        <div className="text-2xl md:text-5xl lg:text-6xl flex flex-col gap-4">
          <h1>I'm Dharshan VK</h1>

          <div className="flex gap-4 flex-wrap">
            I'm a
            <TextType
              text={[
                "Full-Stack Developer.",
                "Photographer.",
                "UI / UX Designer.",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="_"
            />
          </div>
        </div>

        {/* IMAGE */}
        <div className="relative">
          <img
            src={Dharshan}
            alt="Dharshan"
            className="w-64 md:w-96 lg:w-105 rounded-2xl shadow-2xl"
          />
        </div>

      </div>


      {/* RESUME MODAL */}
      {showResume && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">

          <div className="relative w-[90%] md:w-[70%] lg:w-[55%] h-[85%] bg-white rounded-xl overflow-hidden">

            <button
              onClick={() => setShowResume(false)}
              className="absolute top-3 right-4 text-black text-xl font-bold"
            >
              ✕
            </button>

            <iframe
              src={resume}
              title="Resume"
              className="w-full h-full"
            />

          </div>
        </div>
      )}

    </section>
  );
};

export default Home;

//     <section
//       id="home"
//       className="w-full flex min-h-screen justify-center flex-col md:flex-row md:justify-between px-5 md:px-16 gap-20 md:gap-0 zen-antique-soft-regular"
//     >
//       <div className="flex justify-between py-6 md:py-10">
//         {/* LOGO */}
//         <div className="text-xl md:text-2xl font-semibold tracking-wide">
//           <span className="text-white">Dharshan</span>
//           <span className="text-orange-500">.</span>
//         </div>

//         {/* RESUME BUTTON */}
//         <button
//           onClick={() => setShowResume(true)}
//           className="mt-6border border-orange-500 text-orange-500px-5 py-2rounded-lgtext-sm md:text-base hover:bg-orange-500 hover:text-whitetransitionduration-300"
//         >
//           View Resume
//         </button>
//       </div>

//       <div className="text-2xl md:text-5xl lg:text-6xl flex flex-col gap-4 justify-center">
//         <h1>I'm Dharshan VK</h1>

//         <div className="flex gap-4">
//           I'm a
//           <TextType
//             text={[
//               "Full-Stack Developer.",
//               "Photographer.",
//               "UI / UX Designer.",
//             ]}
//             typingSpeed={75}
//             pauseDuration={1500}
//             showCursor={true}
//             cursorCharacter="_"
//           />
//         </div>
//       </div>

//       {/* <div className="relative">
//         <Link
//           to="/carousel"
//           className="text-2xl underline hover:text-[#ff7300]"
//         >
//           My works →
//         </Link>
//       </div> */}

//       <div className="relative flex justify-center md:justify-end w-full md:w-auto md:pr-20">
//         <img
//           src={Dharshan}
//           alt="Dharshan"
//           className="w-64 md:w-100 md:h-125 md:mt-55 rounded-2xl shadow-2xl"
//         />
//       </div>

//       {/* Icons */}
//       <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 text-2xl">
//         <a href="" className="hover:text-[#ff7300] transition">
//           <FaInstagram />
//         </a>
//         <a
//           href="https://www.linkedin.com/in/dharshan-vk/"
//           className="hover:text-[#ff7300] transition"
//         >
//           <FaLinkedin />
//         </a>
//         <a
//           href="https://github.com/dharshan-005"
//           className="hover:text-[#ff7300] transition"
//         >
//           <FaGithub />
//         </a>
//         {/* <a
//           href="mailto:vkdharshan38@gmail.com?subject=Portfolio Inquiry"
//           target="_blank"
//           rel="noopener norefferer"
//           className="hover:text-[#ff7300] transition"
//         >
//           <FaEnvelope />
//         </a> */}

//         <div className="w-0.5 h-32 bg-white/40 mt-2"></div>
//       </div>
//     </section>
//   );
// };

// export default Home;

// // Add social icons
