import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="bg-slate-300 shadow-md p-5 w-screen z-0">
      <div>
        <ul className="flex w-full gap-9">
          <div className="flex md:justify-evenly items-center gap-9 md:w-full">
            <li>
              <a href="/terms-of-service" className="text-blue-900 font-semibold">
                Terms of Service
              </a>
            </li>
            <li className="hidden md:block">
              &copy; {year} Portfolio - Developed By{" "} 
              <a href="/" className="text-blue-900 font-semibold">
                Kingsley
              </a>
            </li>
            <li>
              <a href="/privacy-policy" className="text-blue-900 font-semibold">
                Privacy Policy
              </a>
            </li>
          </div>
          <li className="md:hidden">
            &copy; {year} Developed By{" "}
            <a href="/" className="text-blue-900 font-semibold">
              Kingsley
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
