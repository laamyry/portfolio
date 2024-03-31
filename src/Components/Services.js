import React from "react";
import data from "../data/data.json";
export default function Services() {
  return (
    <div className="mt-5 bg-gray-100 pt-4">
      <div className="text-center text-3xl uppercase font-medium text-[#fc1d32]">
        <h1>Services</h1>
      </div>
      <div className="flex gap-8 justify-center mt-5">
        {data.services.map((service, index) => (
          <div className="mb-5 ">
            <div
              key={index}
              className=" p-5 w-60 h-[22rem] object-contain flex bg-white flex-col text-center rounded-2xl shadow-md"
            >
              <img
                src={service.icon}
                className="w-24 flex self-center"
                alt=""
              />
              <h1 className="text-xl mt-2 font-bold">
                {service.title}
              </h1>
              <ul className="mt-2 text-left p-2">
                {service.desc.map((desc, index) => (
                 <li key={index} className="text-xs list-disc leading-5">{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
