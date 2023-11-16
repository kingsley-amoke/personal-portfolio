import React from "react";
import service from "../assets/services.jpeg";

const Services = () => {
  const cardStyle =
    "w-[50vw] md:w-[25vw] h-[25vw] md:h-[15vw] shadow-md shadow-slate-800 rounded-md mt-10 hover:w-[52vw] hover:md:w-[27vw] hover:h-[27vw] hover:md:h-[17vw] transition-all duration-500 pt-4 px-4 pb-2";
  return (
    <div className="bg-gray-200" id="services">
      <div>
        <hr className="bg-slate-500 h-1" />
      </div>
      <div className="flex flex-col justify-between items-center ml-[5vw] pb-8">
        <div className="my-10">
          <h2 className="font-semibold text-2xl">Services</h2>
          <hr className="w-24 h-1 bg-blue-800 rounded-3xl" />
        </div>
        <div>
          <img src={service} alt="our-services" className="h-64 rounded-full" />
        </div>
        <div className="flex flex-wrap justify-center items-center gap-5">
          <div className={`${cardStyle}`}>
            <div>
              <h2 className="text-blue-900 font-semibold pb-1">
                Front-End Development:
              </h2>
              <div className="text-sm">
                I specialize in designing and coding the user interface (UI) and
                user Experience (UX) of websites, ensuring that they are
                visually appealing and user friendly.
              </div>
            </div>
          </div>
          <div className={`${cardStyle}`}>
            <div>
              <h2 className="text-blue-900 font-semibold pb-1">
                Back-End Development:
              </h2>
              <div className="text-sm">
                I build and maintain the server-side logic, database and
                application functionality, ensuring data security and
                efficiency.
              </div>
            </div>
          </div>
          <div className={`${cardStyle}`}>
            <div>
              <h2 className="text-blue-900 font-semibold pb-1">
                Database MAnagement:
              </h2>
              <div className="text-sm">
                I handle database design, optimization and management.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
