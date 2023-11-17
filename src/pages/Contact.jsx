import React, { useState } from "react";
import axios from "axios";
import { IoMail, IoPerson } from "react-icons/io5";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaFlag, FaPen, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ showMenu, isMenuOpen }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");
  const [country, setCountry] = useState("");

  const serviceId = process.env.REACT_APP_SERVICEID;
  const templateId = process.env.REACT_APP_TEMPLATEID;
  const publicKey = process.env.REACT_APP_PUBLICKEY;

  const data = {
    service_id: serviceId,
    template_id: templateId,
    user_id: publicKey,
    template_params: {
      country: country,
      from_name: name,
      from_email: email,
      topic: topic,
      message: message,
      phone: phone,
      to_name: "Kingsley",
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        "https://api.emailjs.com/api/v1.0/email/send",
        data
      );
      console.log(res.data);
      setEmail("");
      setMessage("");
      setName("");
      setPhone("");
      setTopic("");
      setCountry("");
    } catch (error) {
      console.log(error);
    }
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
          <form onSubmit={handleSubmit}>
            <div className="relative">
              <p className={inputIconStyle}>
                <IoPerson />
              </p>
              <input
                name="name"
                type="text"
                placeholder="Full Name"
                className={inputStyle}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="relative my-4">
              <p className={inputIconStyle}>
                <IoMail />
              </p>
              <input
                name="email"
                type="email"
                placeholder="Enter Your Email"
                className={inputStyle}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="relative my-4">
              <p className={inputIconStyle}>
                <FaFlag />
              </p>
              <input
                name="country"
                type="text"
                placeholder="Country"
                className={inputStyle}
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div>
            <div className="relative">
              <p className={inputIconStyle}>
                <FaPhoneAlt />
              </p>
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className={inputStyle}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
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
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
