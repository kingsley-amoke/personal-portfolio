import React from "react";
import { AiFillGithub, AiFillHtml5 } from "react-icons/ai";
import { FaCss3, FaJs, FaNodeJs } from "react-icons/fa";
import { SiCsharp, SiMysql, SiSanity } from "react-icons/si";
import {
  BiLogoFigma,
  BiLogoGit,
  BiLogoMongodb,
  BiLogoPostgresql,
  BiLogoFlask,
  BiLogoPython,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";
import { TbBrandDjango } from "react-icons/tb";

const Skills = ({ showMenu, isMenuOpen }) => {
  const cardStyle =
    "w-[50vw] md:w-[25vw] h-[25vw] md:h-[15vw] shadow-md shadow-slate-800 rounded-md mt-10 hover:w-[52vw] hover:md:w-[27vw] hover:h-[27vw] hover:md:h-[17vw] transition-all duration-500 overflow-scroll";
  return (
    <div
      className="bg-gray-200"
      id="skills"
      onClick={() => {
        if(isMenuOpen)
        showMenu();
      }}
    >
      <div>
        <hr className="bg-slate-500 h-1" />
      </div>
      <div className="flex flex-col justify-between items-center ml-[5vw] pb-8">
        <h2 className="font-semibold text-2xl">Skills</h2>
        <hr className="w-16 h-1 bg-blue-800 rounded-3xl" />
        <div className="flex flex-wrap justify-center items-center gap-5">
          <div
            className={`${cardStyle} 
          `}
            id="web-dev"
          >
            <h3 className="text-blue-700 font-bold pl-4 pt-2">FrontEnd:</h3>
            <div className="flex gap-2 justify-start items-center ml-20 mt-4">
              <AiFillHtml5 className="text-indigo-700" />
              <p>HTML 5</p>
            </div>

            <div className="flex gap-2 justify-start items-center ml-20">
              <FaCss3 className="text-blue-500" />
              <p>CSS 3</p>
            </div>

            <div className="flex gap-2 justify-start items-center ml-20">
              <FaJs className="text-yellow-500" />
              <p>Javascript</p>
            </div>
          </div>
          <div className={cardStyle} id="api">
            <h3 className="text-blue-700 font-bold pl-4 pt-2">Backend:</h3>
            <div className="flex gap-2 justify-start items-center ml-20 mt-2">
              <FaNodeJs className="text-green-700" />
              <p>Node Js</p>
            </div>

            <div className="flex gap-2 justify-start items-center ml-20">
              <SiCsharp className="text-indigo-500" />
              <p>C#</p>
            </div>
            <div className="flex gap-2 justify-start items-center ml-20">
              <BiLogoPython className="text-yellow-500" />
              <p>Python</p>
            </div>

            <div className="flex gap-2 justify-start items-center ml-20">
              <SiSanity className="text-red-500" />
              <p>Sanity.io</p>
            </div>
          </div>
          <div className={cardStyle} id="db-mgt">
            <h3 className="text-blue-700 font-bold pl-4 pt-2">
              Database Management:
            </h3>
            <div className="flex gap-2 justify-start items-center ml-20 mt-2">
              <BiLogoMongodb className="text-green-700" size="2rem" />
              <p>Mongo DB</p>
            </div>

            <div className="flex gap-2 justify-start items-center ml-20">
              <SiMysql className="text-blue-800" size="2rem" />
              <p>mySQL</p>
            </div>
            <div className="flex gap-2 justify-start items-center ml-20">
              <BiLogoPostgresql className="text-blue-800" size="2rem" />
              <p>PostgrsSql</p>
            </div>
          </div>
          <div className={cardStyle}>
            <h3 className="text-blue-700 font-bold pl-4 pt-2">Frameworks:</h3>
            <div className="flex gap-2 justify-start items-center ml-20 mt-2">
              <BiLogoReact className="text-blue-400" size="1.5rem" />
              <p>React Js</p>
            </div>

            <div className="flex gap-2 justify-start items-center ml-20 py-1">
              <BiLogoTailwindCss className="text-blue-400" size="1.5rem" />
              <p>TailwindCSS</p>
            </div>

            <div className="flex gap-2 justify-start items-center ml-20">
              <TbBrandDjango className="text-green-900" size="1.5rem" />
              <p>DJango</p>
            </div>
            <div className="flex gap-2 justify-start items-center ml-20 pb-8">
              <BiLogoFlask className="text-green-900" size="1.5rem" />
              <p>Flask</p>
            </div>
          </div>
          <div className={cardStyle} id="uiux">
            <h3 className="text-blue-700 font-bold pl-4 pt-2">UI/UX Design:</h3>
            <div className="flex gap-2 justify-start items-center ml-20 mt-4">
              <BiLogoFigma className="text-red-600" size="2.5rem" />
              <p>Figma</p>
            </div>
          </div>
          <div className={cardStyle}>
            <h3 className="text-blue-700 font-bold pl-4 pt-2">
              Version Control:
            </h3>
            <div className="flex gap-2 justify-start items-center ml-20 mt-4">
              <BiLogoGit className="text-red-500" size="1.5rem" />
              <p>Git</p>
            </div>

            <div className="flex gap-2 justify-start items-center ml-20 py-1">
              <AiFillGithub className="text-black" size="1.5rem" />
              <p>Github</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
