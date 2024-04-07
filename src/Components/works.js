import React from "react";
import data from "../data/data.json";
const Works = () => {
  return (
    <div className="bg-gray-100 pt-4" id="works">
      <div className="h-auto p-2">
        <div className="text-3xl uppercase font-bold text-[#fc1d32] w-72 text-center  m-auto">
          <h1>works</h1>
        </div>
        <div className="flex gap-3 justify-center my-10 flex-wrap">
          {data.behance.map((work, index) => (
            <iframe
              key={index}
              className="works-card w-72 h-80 rounded-xl"
              src={`https://www.behance.net/embed/project/${work.number}?ilo0=1`}
              allowFullScreen
              frameBorder="0"
              allow="clipboard-write"
              refererpolicy="strict-origin-when-cross-origin"
              title="Behance portfolio"
              loading="lazy"
            ></iframe>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;
