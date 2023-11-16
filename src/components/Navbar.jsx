import React from "react";

const Navbar = () => {
  const sidebarStyle =
    "block px-6 py-4 hover:text-white hover:bg-blue-500 transition-all duration-500";
  return (
    <div>
      <ul className="uppercase w-full flex h-full">
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
    </div>
  );
};

export default Navbar;
