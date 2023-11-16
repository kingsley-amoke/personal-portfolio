import React from "react";
import logo from "../assets/logo.png";
import Navbar from "../components/Navbar";
import MobileNav from "./MobileNav";

const Header = ({showMenu, isMenuOpen}) => {
  return (
    <div className="flex shadow-md justify-between p-5 bg-slate-300">
      <div className="w-10 h-10">
        <a href="/">
          <img src={logo} alt="logo" className="cursor-pointer" />
        </a>
      </div>
      <div className="hidden md:flex">
        <Navbar />
      </div>
      <div className="md:hidden">
        <MobileNav showMenu={showMenu} isMenuOpen={isMenuOpen} />
      </div>
    </div>
  );
};

export default Header;
