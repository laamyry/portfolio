import React from "react";
import data from "../data/data.json";
export default function Skills() {
  return (
    <div className="flex p-10 ml-14 gap-7">
      <div className="">
        <img
          src="https://picsum.photos/id/10/300/300"
          alt=""
        />
      </div>
      <div className="flex gap-2 trace p-6 w-72 h-72 justify-center flex-wrap">
        {data.skills.map((skill, index) => (
          <div key={index} class="grid-container self-center w-11">
            <div className="">
              <img src={skill.icon} className="rounded-full" alt="" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
