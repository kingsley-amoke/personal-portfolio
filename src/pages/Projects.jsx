import React, { useState } from "react";
import Slider from "react-slick";
import { FaEye, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { BiLogoGithub } from "react-icons/bi";
import { Tooltip } from "react-tooltip";
import "./project.css";

import { projects } from "../assets/data";

const Projects = () => {
  const NextArrow = ({ onClick }) => {
    return (
      <div onClick={onClick} className="arrow next">
        <FaArrowRight />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div onClick={onClick} className="arrow prev">
        <FaArrowLeft />
      </div>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyload: true,
    speed: 300,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  // const cardStyle =
  //   "w-[45vw] md:w-[27vw] h-[35vw] md:h-[20vw] md:gap-5 shadow-md shadow-slate-800 rounded-md mt-10 hover:w-[50vw] hover:md:w-[30vw] hover:h-[40vw] hover:md:h-[25vw] transition-all duration-500 -z-0";
  return (
    <div id="projects" className="h-screen md:h-auto">
      <div>
        <hr className="bg-slate-500 h-1" />
      </div>
      <div className="flex flex-col justify-between items-center ml-[5vw] pb-8">
        <h2 className="font-semibold text-2xl">Projects</h2>
        <hr className="w-24 h-1 bg-blue-800 rounded-3xl" />
        <div className="w-[80%] md:w-1/2 h-full md:h-1/2 shadow-md rounded-sm mt-20 pb-12">
          <Slider {...settings}>
            {projects.map((project, index) => (
              <div
                className={index === imageIndex ? "activeSlide slide" : "slide"}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full md:w-1/2 h-[10rem] md:h-1/2 bg-gray-700 rounded-sm "
                />
                <div className=" flex gap-7 absolute bottom-10 right-[40%]">
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={project.url}
                    data-tooltip-id="projects"
                    data-tooltip-content="View Project"
                    data-tooltip-delay-show={200}
                    data-tooltip-delay-hide={300}
                  >
                    <FaEye
                      size="1.5rem"
                      className="cursor-pointer hover:text-blue-700 text-gray-500"
                    />
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={project.github}
                    data-tooltip-id="projects"
                    data-tooltip-content="View Github Code"
                    data-tooltip-delay-show={200}
                    data-tooltip-delay-hide={300}
                  >
                    <BiLogoGithub
                      size="1.5rem"
                      className="cursor-pointer hover:text-blue-700 text-gray-500"
                    />
                  </a>
                  <Tooltip id="projects" />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Projects;
