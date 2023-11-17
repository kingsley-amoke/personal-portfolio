import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Privacy = () => {
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
        <h2 className="font-semibold text-2xl">Privacy Policy</h2>
        <hr className="w-[10rem] h-1 bg-blue-800 rounded-3xl" />
        <div className="text-lg">
          <p className="mt-4">
            Welcome to Kingsley's Portfolio! Your privacy is important to us,
            and we want you to feel comfortable exploring the projects and
            experiences showcased here. This Privacy Policy outlines how we
            collect, use, and protect your personal information. By using this
            portfolio, you agree to the terms outlined in this policy.
            <h3 className="font-semibold my-4"> Information We Collect:</h3>We
            may collect personal information such as your name, email address,
            and any additional details you choose to provide through contact
            forms or direct communication.
            <h3 className="font-semibold my-4">How We Use Your Information:</h3>
            The information collected is used for communication purposes, such
            as responding to inquiries or collaboration requests. We may also
            use your email address to send periodic updates about new projects
            or relevant information.
            <h3 className="font-semibold my-4">Third-Party Services: </h3>We may
            use third-party services, such as website analytics tools, to better
            understand how visitors interact with the portfolio. These services
            may collect information anonymously and track user trends without
            identifying individual users.
            <h3 className="font-semibold my-4"> Contact:</h3>
            If you have any questions or concerns about this Privacy Policy or
            the use of your personal information please visit
            <a href="/contact" className="text-blue-600 ml-2">
              my contact page
            </a>
            .
            <p className="mt-4">
              Thank you for visiting my Portfolio. Your privacy is
              important to us, and we are committed to maintaining the
              confidentiality and security of your information.
            </p>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;
