import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "./Contact";
import Skills from "./Skills";
import Projects from "./Projects";
import About from "./About";
import Services from "./Services";
import {
  AiFillLinkedin,
  AiOutlineArrowRight,
  AiOutlineGithub,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

import profile from "../assets/profile-photo.jpg";
import resume from "../assets/Amoke.pdf";

const Home = () => {
  const buttonStyle =
    "flex justify-between gap-2 items-center rounded-xl py-1 px-2 hover:px-3 hover:bg-gray-100 hover:shadow-lg hover:shadow-slate-600 trasition-all duration-500";
  return (
    <div className="bg-gray-200">
      <div className="sticky">
        <Header />
      </div>
      <div className="flex flex-col-reverse md:flex-row gap-12 justify-center items-center pb-10">
        <div>
          <div className="font-bold">
            <p>Welcome to my portfolio,</p>
            <p>
              I am{" "}
              <a href="#about" className="text-blue-700">
                Kingsley
              </a>
            </p>
            <p className="text-lg">A Web Developer,</p>
            <p className="text-xl">UI/UX Designer,</p>
            <p className="text-2xl">Programmer</p>
            <p className="text-3xl">& Digital Marketer</p>
          </div>
          <div>
            <img
              src={profile}
              alt="profile"
              className="md:hidden h-64 rounded-full mt-3"
            />
          </div>
          <div className="text-white flex justify-center items-center gap-6 my-6 ml-20">
            <button
              className={`${buttonStyle} bg-blue-700 hover:bg-white hover:text-black font-semibold hover:shadow-lg hover:shadow-slate-900`}
            >
              <a href="/contact">Contact Us</a>
            </button>
            <button
              className={`${buttonStyle} bg-blue-700 hover:bg-white hover:text-black font-semibold hover:shadow-lg hover:shadow-slate-900`}
            >
              <a
                href={resume}
                download={resume}
                className="flex justify-between items-center gap-2"
              >
                Download CV <AiOutlineArrowRight className="text-slate-800" />
              </a>
            </button>
          </div>

          <div>
            <div className="text-white flex justify-center items-center gap-4 ml-1">
              <button
                className={`${buttonStyle} bg-white text-black shadow-xl`}
              >
                <a
                  href="mailto:klordbravo@gmail.com"
                  className="flex justify-between items-center gap-2"
                >
                  <AiFillMail className="text-indigo-700 text-3xl" />
                  <p className="mb-1">email</p>
                </a>
              </button>
              <button
                className={`${buttonStyle} bg-white text-black shadow-xl`}
              >
                <a
                  href="https://www.linkedin.com/in/kingsley-amoke
"
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-between items-center gap-2"
                >
                  <AiFillLinkedin className="text-blue-900 text-3xl" />
                  <p className="mb-1">linkedIn</p>
                </a>
              </button>
            </div>
            <div className="text-white flex justify-center items-center gap-20 my-4">
              <button
                className={`${buttonStyle} bg-white text-black shadow-xl`}
              >
                <a
                  href="https://www.facebook.com/kingsley.chibuike.54
"
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-between items-center gap-2"
                >
                  <FaFacebookF className="text-blue-500 text-3xl" />
                  <p className="mb-1">facebook</p>
                </a>
              </button>
              <button
                className={`${buttonStyle} bg-white text-black shadow-xl`}
              >
                <a
                  href="https://wa.me/+2348169437186
"
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-between items-center gap-2"
                >
                  <AiOutlineWhatsApp className="text-green-600 text-3xl" />
                  <p className="mb-1">whatsapp</p>
                </a>
              </button>
            </div>
            <div className="text-white flex justify-center items-center gap-4 ml-1">
              <button
                className={`${buttonStyle} bg-white text-black shadow-xl`}
              >
                <a
                  href="https://github.com/kingsley-amoke
"
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-between items-center gap-2"
                >
                  <AiOutlineGithub className="text-indigo-900 text-3xl" />
                  <p className="mb-1">github</p>
                </a>
              </button>
              <button
                className={`${buttonStyle} bg-white text-black shadow-xl`}
              >
                <a
                  href="https://twitter.com/pstsmoq
"
                  target="_blank"
                  rel="noreferrer"
                  className="flex justify-between items-center gap-2"
                >
                  <FaTwitter className="text-blue-500 text-3xl" />
                  <p className="mb-1">twitter</p>
                </a>
              </button>
            </div>
          </div>
        </div>
        <div>
          <img
            src={profile}
            alt="profile"
            className=" hidden md:block h-64 rounded-full"
          />
        </div>
      </div>
      <Services />
      <Projects />
      <Skills />
      <About />
      <Contact />
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
