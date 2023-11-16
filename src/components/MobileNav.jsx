import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineCloseCircle } from "react-icons/ai";

const MobileNav = () => {
  const sidebarStyle =
    "py-4 hover:text-lg transition-all duration-500 px-4 font-semibold";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showMenu = () => {
    if (isMenuOpen === true) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };
  return (
    <div className="z-20">
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
          !isMenuOpen ? "translate-y-[-30vw]" : " translate-y-[0vw] "
        } w-[100vw] h-[15vh] text-white transition-all duration-1000 flex justify-between items-center pb-4 z-10 pt-1 pr-1`}
      >
        <ul className="flex items-center gap-1 ml-2 uppercase w-full">
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
        <div className="cursor-pointer block p-3 text-white hover:h-12 hover:w-12">
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
