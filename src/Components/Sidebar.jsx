import React from "react";
import profile from "../assets/Profile-pic.jpg";
import logo from '../assets/logo7.png'

const Sidebar = () => {
  return (
    <>
      <div className="w-86 border-2 p-4 rounded-2xl text-white">
        <div className="flex flex-col gap-6 pt-4 pb-4">
          {/* Logo */}
          <div className="flex gap-4.5 items-center">
            <a href="" className="w-14 h-14 border-2 border-black rounded-2xl relative">
              <img src={logo} alt="Logo" className="w-full h-full" />
            </a>
            <p className="flex flex-col text-2xl">
              Dharshan V K
              <span className="text-[#ff7300] text-[14px]">Wanderlust Person</span>
            </p>
          </div>

          {/* Profile Picture */}
          <div className="border-2 border-white w-65 h-65 rounded-2xl overflow-hidden relative left-5">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col gap-6 p-2">
            <div>
              <h1 className="font-bold">Specialization:</h1>
              <p>Full-Stack Developer</p>
            </div>

            <div>
              <h1 className="font-bold">Based in:</h1>
              <p>Tamil Nadu, India</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="flex justify-around p-2">
              <a
                href="https://www.linkedin.com/in/dharshan-vk/"
                className="border-2 rounded-2xl border-gray-300 w-8 h-8 flex items-center justify-center p-2"
              >
                <i class="fa-brands fa-linkedin hover:text-[#ff7300]"></i>
              </a>
              <a
                href=""
                className="border-2 rounded-2xl border-gray-300 w-8 h-8 flex items-center justify-center p-2"
              >
                <i class="fa-brands fa-x-twitter hover:text-[#ff7300]"></i>
              </a>
              <a
                href="https://www.instagram.com/dharshan___05/"
                className="border-2 rounded-2xl border-gray-300 w-8 h-8 flex items-center justify-center p-2"
              >
                <i class="fa-brands fa-instagram hover:text-[#ff7300]"></i>
              </a>
              <a
                href="https://canary.discord.com/channels/@me"
                className="border-2 rounded-2xl border-gray-300 w-8 h-8 flex items-center justify-center p-2"
              >
                <i class="fa-brands fa-discord hover:text-[#ff7300]"></i>
              </a>
              <a
                href="https://github.com/dharshan-005"
                className="border-2 rounded-2xl border-gray-300 w-8 h-8 flex items-center justify-center p-2"
              >
                <i class="fa-brands fa-github hover:text-[#ff7300]"></i>
              </a>
            </div>

            <a
              href=""
              className="bg-gray-400 p-2 rounded-2xl text-black flex justify-center cursor-pointer hover:bg-[#ff7300]"
            >
              Let's Work Together
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
