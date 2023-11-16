import React from "react";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

const MobileNav = ({showMenu, isMenuOpen}) => {

  const sidebarStyle =
    "py-4 hover:text-lg transition-all duration-500 px-4 font-semibold";

  
  return (
    <div className="z-20 ">
      <div
        className="cursor-pointer"
        onClick={() => {
          showMenu();
        }}
      >
        <AiOutlineMenu className=" w-7 hover:w-8 h-7 hover:h-8 transition-all duration-200" />
      </div>

      <div
        className={`fixed right-0 top-0 bg-slate-500 ${
          !isMenuOpen ? "translate-x-[100vw]" : " max-[475px]:translate-x-[65vw] translate-x-[70vw] "
        } w-[100vw] xs:pl-4 h-[70vh] text-white transition-all duration-1000 flex flex-col justify-between items-start pb-4 z-10 pt-1 pr-1 rounded-b-lg`}
      >
        <ul className="flex flex-col items-start gap-1 ml-2 uppercase w-full ">
          <li className={sidebarStyle}>
            <a href="#services">Services</a>
          </li>
          <li className={sidebarStyle}>
            <a href="#projects">Projects</a>
          </li>
          <li className={sidebarStyle}>
            <a href="#skills">Skills</a>
          </li>
          <li className={sidebarStyle}>
            <a href="#about">About</a>
          </li>
          <li className={sidebarStyle}>
            <a href="#contact">Contact Us</a>
          </li>
        </ul>
        <div className="cursor-pointer block p-3 text-white hover:h-12 hover:w-12 ml-10">
          <AiOutlineCloseCircle
            className="h-full w-full"
            onClick={() => {
              showMenu();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
