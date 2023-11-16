<div
  className={`${cardStyle} relative flex flex-col justify-between items-center`}
>
  <img
    src={projects[0].image}
    alt="logo"
    className="absolute inset-0 h-full w-full opacity-90 rounded-md"
  />
  <div className="h-full w-full absolute inset-0 opacity-40 hover:opacity-0 bg-black transition-all duration-500 rounded-md z-0"></div>
  <div className="flex flex-col justify-between items-center h-full w-full border py-5 font-semibold ">
    <h2 className="opacity-100 z-10 text-blue-700 text-2xl font-bold">
      {projects[0].title}
    </h2>
    <div className="z-10 flex gap-5">
      <a
        href="#"
        data-tooltip-id="projects"
        data-tooltip-content="View Github Code"
        data-tooltip-delay-show={200}
        data-tooltip-delay-hide={300}
      >
        <BiLogoGithub
          size="1.5rem"
          className="cursor-pointer hover:text-white text-gray-500"
        />
      </a>

      <a
        href="#"
        data-tooltip-id="projects"
        data-tooltip-content="View Project"
        data-tooltip-delay-show={200}
        data-tooltip-delay-hide={300}
      >
        <FaEye
          size="1.5rem"
          className="cursor-pointer hover:text-white text-gray-500"
        />
        <Tooltip id="projects" />
      </a>
    </div>
  </div>
</div>;
