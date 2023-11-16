import React from "react";
// import Header from "../components/Header";
import Footer from "../components/Footer";

import { AiOutlineArrowRight } from "react-icons/ai";

const Contact = () => {
  const inputStyle =
    "ml-4 bg-gray-100 border rounded-md shadow shadow-slate-400 w-full outline-none px-4 py-1 placeholder-gray-300";
  return (
    <div className="bg-gray-200" id="contact">
      <div className=" bg-slate-500 h-1 z-0">
        <hr />
      </div>
      <div className="flex flex-col justify-between items-center ml-[5vw] pb-8 mt-4">
        <h2 className="font-semibold text-2xl">Contact Us</h2>
        <hr className="w-28 h-1 bg-blue-800 rounded-3xl" />
        <div className="shadow-md shadow-slate-600 rounded-sm flex flex-col py-8 px-20 my-3">
          <form action="/">
            <div>
              <p>Name:</p>
              <input
                type="text"
                placeholder="eg. Amoke Kingsley Chibuike"
                className={inputStyle}
              />
              <p>Email:</p>
              <input
                type="email"
                placeholder="eg. klordbravo@gmail.com"
                className={inputStyle}
              />
              <p>Phone Number:</p>
              <input
                type="tel"
                placeholder="+2349159960425"
                className={inputStyle}
              />
              <p>Subject</p>
              <input
                type="text"
                placeholder="eg. Project Offer"
                className={inputStyle}
              />
            </div>
            <div>
              <p>Message:</p>
              <textarea
                name="message"
                cols="30"
                rows="5"
                placeholder="Your message here..."
                className={inputStyle}
              />
            </div>
            <div className="w-full flex justify-end items-center mt-3">
              <button className="shadow-md shadow-slate-400 bg-blue-700 rounded-lg px-4 py-2 text-white flex justify-between items-center gap-2 hover:bg-gray-600 hover:text-black transition-all duration-300">
                <p>Send</p> <AiOutlineArrowRight className="text-black" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
