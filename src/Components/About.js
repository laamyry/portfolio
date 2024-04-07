import React from "react";
import shape from "../Assets/shape.svg";
export default function About() {
  return (
    <div className="flex p-10" id="about">
      <div className="self-center ml-14">
        <h1 className="text-4xl font-medium uppercase text-[#fc1d32]">
          About me
        </h1>
        <p className="w-2/4 text-xl mt-3">
          I'm Laamyry Mohamed, I'm a Graphic & Motion
          Designer, and front-end Developer from Morocco, I
          spent most of the time learning many software and
          techniques.
        </p>
      </div>
      <div className="w-96 mr-14">
        <img src={shape} alt="" />
      </div>
    </div>
  );
}
