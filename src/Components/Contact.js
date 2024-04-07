import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBehance, faFacebook, faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
const Contact = () => {
  return (
    <div className="mt-5" id="Contact">
      <div className="">
        <div className="flex gap-6 p-5">
          <div className="flex-1  p-7 self-center">
            <div className="text-3xl uppercase font-bold text-[#fc1d32] w-72">
              <h1>Contact</h1>
            </div>
            <div className="ml-2">
              <h1 className="font-semibold">E-mail:</h1>
              <h2>contact@medlamyry.com</h2>
              <h1 className="font-semibold mt-3">Phone</h1>
              <h2>+212 619 367 728</h2>
              <ul className="flex gap-2 text-xl mt-3">
                <li>
                  <a href="https://www.behance.net/laamyry"><FontAwesomeIcon icon={faBehance} /></a>
                </li>
                <li>
                  <a href="https://github.com/laamyry"><FontAwesomeIcon icon={faGithub} /></a>
                </li>
                <li>
                  <a href="https://instagram.com/medlaamyry"><FontAwesomeIcon icon={faInstagram} /></a>
                </li>
                <li>
                  <a href="https://www.facebook.com/medlaamyry"><FontAwesomeIcon icon={faFacebook} /></a>
                </li>
                <li>
                  <a href="https://twitter.com/medlaamyry"><FontAwesomeIcon icon={faTwitter} /></a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-2 form bg-gray-100 p-7 rounded-lg w-[50%]">
            <form className="flex flex-col gap-2">
              <label htmlFor="name"></label>
              <input
                className="border-b-2"
                type="text"
                placeholder="Name"
                id="name"
              />
              <label htmlFor="email"></label>
              <input
                className="border-b-2 mt-3"
                type="text"
                placeholder="Email"
                id="email"
              />
            </form>
            <div>
              <textarea
                className="bg-slate-100 p-2 w-[97%] h-40 mt-4"
                placeholder="Message"
                name="message"
                id=""
              ></textarea>
            </div>
            <button className="bg-red-600 p-2 font-bold text-white rounded-lg">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
