import React from "react";
import logo from "../Assets/med-logo.png";
import { Link } from "react-scroll";

export default function Header() {
  return (
    <header>
      <div>
        <nav className="px-10 pt-3">
          <ul className="flex gap-5 font-medium text-xl justify-center relative p-5 cursor-pointer">
            <li className="absolute left-6">
              <img className="h-14" src={logo} alt="logo" />
            </li>
            <li>
              <Link smooth={true} to="about">
                About
              </Link>
            </li>
            <li>
              <Link smooth={true} to="services">
                Services
              </Link>
            </li>
            <li>
              <Link smooth={true} to="skills">
                Skills
              </Link>
            </li>
            <li>
              <Link smooth={true} to="works">
                Works
              </Link>
            </li>
            <li>
              <Link smooth={true} to="contact">
                Contact
              </Link>
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
