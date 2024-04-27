// import React from 'react'

import { SiBuymeacoffee, SiGithub } from "react-icons/si";
// import { ModeToggle } from "./mode-toggle";
// import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="p-4 bg-stone-700 text-white">
      {/* <ModeToggle /> */}
      <header className="">
        <div className="container flex justify-between h-8 mx-auto">
          <a
            rel="noopener noreferrer"
            href="/"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img
              src="/logo.png"
              className="w-12 h-12 rounded-lg"
              alt="main logo"
            />
          </a>
          <ul className="flex items-center justify-end space-x-3">
            <li className="">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://buymeacoffee.com/rajkapadiat"
                className="flex items-center px-2 -mb-1 border-b-2 border-transparent"
              >
                <SiBuymeacoffee className="w-6 h-6"/>
              </a>
            </li>
            <li className="">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="https://github.com/rkgith01"
                className="flex items-center px-1 -mb-1 border-b-2 border-transparent"
              >
                <SiGithub  className="w-6 h-6"/>
              </a>
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
