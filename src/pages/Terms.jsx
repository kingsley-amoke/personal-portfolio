import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Terms = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const showMenu = () => {
    if (isMenuOpen === true) {
      setIsMenuOpen(false);
    } else {
      setIsMenuOpen(true);
    }
  };

  return (
    <div
      onClick={() => {
        if (isMenuOpen) showMenu();
      }}
    >
      <div>
        <Header showMenu={showMenu} isMenuOpen={isMenuOpen} />
      </div>
      <div className="flex flex-col justify-between items-center ml-[5vw] pb-8">
        <h2 className="font-semibold text-2xl">Terms of Service</h2>
        <hr className="w-[12rem] h-1 bg-blue-800 rounded-3xl" />
        <div className="text-lg">
          <p className="mt-4">
            Welcome to Kingsley's Portfolio! We're delighted to have you explore
            our work. Before you dive into the projects showcased, please take a
            moment to review the following terms. Your use of this portfolio
            indicates your acceptance of these terms.
            <h3 className="font-semibold my-4">Purpose: </h3>This portfolio is a
            showcase of my work, achievements, and skills. It is intended for
            informational and professional purposes only.
            <h3 className="font-semibold my-4">Professional Conduct:</h3>
            By accessing this portfolio, you agree to engage in respectful and
            professional behavior. Any form of inappropriate or malicious
            activity is strictly prohibited.
            <h3 className="font-semibold my-4"> Contact:</h3>
            If you have any inquiries or wish to discuss collaborations or usage
            of the content, please visit{" "}
            <a href="/contact" className="text-blue-600 ml-2">
              my contact page
            </a>
            .
            <p className="mt-4">
              Thank you for visiting my Portfolio. Enjoy the exploration of my
              work, and feel free to reach out for any professional inquiries!
            </p>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Terms;
