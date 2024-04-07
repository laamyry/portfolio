import React from "react";
import image from "../Assets/skills.svg";
import data from "../data/data.json";
export default function Skills() {
  return (
    <div className="flex ml-14 gap-14 flex-wrap" id="skills">
      <div className="flex flex-1 w-[70%] ">
        <img className=" w-[80%]" src={image} alt="" />
      </div>
      <div className="flex flex-col justify-center self-center flex-1   ">
        <div className="text-3xl uppercase font-bold text-[#fc1d32] w-72 text-center  m-auto">
          <h1>Skills</h1>
        </div>
        <div className="flex gap-2 p-6 h-72  flex-wrap w-72  m-auto justify-center">
          {data.skills.map((skill, index) => (
            <div
              key={index}
              className="grid-container self-center flex justify-center"
            >
              <div className="rounded-full flex w-11 h-11">
                <img
                  src={skill.icon}
                  className="self-center object-contain h-16 w-16 "
                  alt=""
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
