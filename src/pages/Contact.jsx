import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { IoMail, IoPerson } from "react-icons/io5";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaPen, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ showMenu, isMenuOpen }) => {
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_blr9ofa",
        "template_9ve9qi6",
        e.target,
        "D_-bCyxEMnvUkKItr"
      )
      .then(
        (response) => {
          console.log(response);
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const inputIconStyle = "absolute top-[0.9rem] left-[0.7rem]";
  const inputStyle =
    " bg-gray-100 border rounded-md shadow shadow-slate-400 w-full outline-none px-10 py-2";
  return (
    <div
      className="bg-gray-200"
      id="contact"
      onClick={() => {
        if (isMenuOpen) showMenu();
      }}
    >
      <div className=" bg-slate-500 h-1">
        <hr />
      </div>
      <div className="flex flex-col justify-between items-center pb-8 mt-4">
        <h2 className="font-semibold text-2xl">Contact Us</h2>
        <hr className="w-28 h-1 bg-blue-800 rounded-3xl" />
        <div className="md:shadow-md shadow-slate-600 rounded-sm flex flex-col py-8 px-10 my-3">
          <form action="/" onSubmit={handleSubmit} ref={formRef}>
            <div className="relative">
              <p className={inputIconStyle}>
                <IoPerson />
              </p>
              <input
                name="user_name"
                type="text"
                placeholder="Full Name"
                className={inputStyle}
              />
            </div>
            <div className="relative my-4">
              <p className={inputIconStyle}>
                <IoMail />
              </p>
              <input
                name="user_email"
                type="email"
                placeholder="Enter Your Email"
                className={inputStyle}
              />
            </div>
            <div className="relative">
              <p className={inputIconStyle}>
                <FaPhoneAlt />
              </p>
              <input
                name="user_phone"
                type="tel"
                placeholder="Phone Number"
                className={inputStyle}
              />
            </div>
            <div className="relative my-4">
              <p className={inputIconStyle}>
                <FaPen />
              </p>
              <input
                name="topic"
                type="text"
                placeholder="Job Offer"
                className={inputStyle}
              />
            </div>
            <div className="relative">
              <p className={inputIconStyle}>
                <FaPen />
              </p>
              <textarea
                name="message"
                cols="30"
                rows="5"
                placeholder="Job Description"
                className={inputStyle}
              />
            </div>
            <div className="w-full flex justify-end items-center mt-3">
              <button
                className="shadow-md shadow-slate-400 bg-blue-700 rounded-lg px-4 py-2 text-white flex justify-between items-center gap-2 hover:bg-gray-600 hover:text-black transition-all duration-300"
                type="submit"
              >
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
