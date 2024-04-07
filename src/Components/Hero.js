import React from "react";
import avatar from "../Assets/avatar.png";
export default function Hero() {
  return (
    <div className="about " id="hero">
      <div className="flex gap-4 bg-gray-100">
        <div className=" p-10 self-center w-2/3 ml-14">
          <h1 className="">Hello my name is</h1>
          <h1>
            <b className="text-4xl">
              Med <b className="uppercase">Laamyry</b>
            </b>
            ,
          </h1>
          <p className="text-2xl leading-9">
            I'm a <b>graphic designer</b> &<b> frontend Developer</b>.
          </p>

          <button className="bg-[#fc1d32] px-4 py-3 text-xl text-white rounded-full mt-3">
            Download cv
          </button>
        </div>
        <div className="flex-1 p-10 relative">
          <img
            className="w-96 float-right rounded-full shadow-2xl mr-14"
            src={avatar}
            alt="logo"
          />
        </div>
      </div>
    </div>
  );
}
