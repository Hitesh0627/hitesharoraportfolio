import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="bg-slate-900 p-4" style={{ cursor: "default" }}>
      <div className="flex justify-between flex-wrap gap-4">
        <p className="text-white text-center w-full sm:w-auto font-light">
          © {year} Hitesh Arora. All rights reserved.
        </p>
        <div className="text-white flex justify-around sm:w-[250px] w-full">
          <a
            href="https://www.linkedin.com/in/hitesh0627/"
            target="_blank"
            rel="noreferrer"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            style={{ cursor: "pointer" }}
          >
            <AiFillLinkedin className="text-xl" />
          </a>
          <a
            href="https://github.com/Hitesh0627"
            target="_blank"
            rel="noreferrer"
            className="transition ease-in-out duration-300 rounded-md hover:scale-110 cursor-pointer hover:-translate-y-1"
            style={{ cursor: "pointer" }}
          >
            <FaGithub className="text-xl" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
