import React from "react";
import logo from "../Assets/med-logo.png";
export default function Header() {
  return (
    <header>
      <div>
        <nav className="px-10 pt-3">
          <ul className="flex gap-5 font-medium text-xl justify-center relative p-5 ">
            <li className="absolute left-6">
              <img className="h-14" src={logo} alt="logo" />
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
            <li>
              <a href="#work">Works</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li className="absolute right-6">
              <button className="icon-moon"></button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
