import React from "react";

const About = ({ showMenu, isMenuOpen }) => {
  return (
    <div
      className="bg-gray-200"
      id="about"
      onClick={() => {
        if (isMenuOpen) showMenu();
      }}
    >
      <div>
        <hr className="bg-slate-500 h-1" />
      </div>
      <div className="flex flex-col justify-between items-center ml-[5vw] pb-8">
        <h2 className="font-semibold text-2xl">About me</h2>
        <hr className="w-28 h-1 bg-blue-800 rounded-3xl" />
        <div className="text-lg">
          <p>
            Hey. I’m an enthusiastic full-stack developer with 4+ experience.
            I’m dedicated to crafting digital solutions that align with my
            clients’ needs. With a diverse skill set and a keen eye for
            user-centric design, I create seamless and engaging web experiences.
            I develop both the front-end and back-end of application, ensuring
            they are well-beautified, function flawlessly and user-friendly. My
            expertise spans across:
          </p>
          <ul className="text-2xl font-semibold my-4 list-disc text-blue-800">
            <li>
              <a href="/skills#web-dev">Web Development and Deployment</a>
            </li>
            <li className="mt-2">
              <a href="/skills#db-mgt">Database Management</a>
            </li>
            <li className="my-2">
              <a href="/skills#api">API Integration</a>
            </li>
            <li>
              <a href="/skills#uiux">UI/UX Designs</a>
            </li>
          </ul>
          <p>
            Thanks for visiting my portfolio. And I look forward to the
            opportunity to collaborate with you on your new or existing project.
            Kindly check out the toolbox that contains the languages,
            frameworks, varieties of systems, I work with.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
