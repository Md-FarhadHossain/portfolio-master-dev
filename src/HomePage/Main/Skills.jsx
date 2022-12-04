import React from "react";
import Hobbies from "./Hobbies";

const Skills = () => {
  return (
    <div className="bg-white rounded-lg px-8 py-5 mb-8">
      <h1 className="text-2xl">Skills</h1>
      {/* 1 */}
      <div className="flex justify-between items-center">
        <p>HTML</p>
        <progress
          className="progress progress-error w-56"
          value="95"
          max="100"
        ></progress>
      </div>
      {/* 2 */}
      <div className="flex justify-between items-center">
        <p>CSS</p>
        <progress
          className="progress progress-error w-56"
          value="90"
          max="100"
        ></progress>
      </div>
      {/* 3 */}
      <div className="flex justify-between items-center">
        <p>Javascript</p>
        <progress
          className="progress progress-error w-56"
          value="60"
          max="100"
        ></progress>
      </div>
      {/* 4 */}
      <div className="flex justify-between items-center">
        <p>React</p>
        <progress
          className="progress progress-error w-56"
          value="80"
          max="100"
        ></progress>
      </div>
      {/* 5 */}
      <div className="flex justify-between items-center">
        <p>Tailwind</p>
        <progress
          className="progress progress-error w-56"
          value="70"
          max="100"
        ></progress>
      </div>
      {/* 6 */}
      <div className="flex justify-between items-center">
        <p>Bootstrap</p>
        <progress
          className="progress progress-error w-56"
          value="80"
          max="100"
        ></progress>
      </div>
      {/* 7 */}
      <div className="flex justify-between items-center">
        <p>MongoDB</p>
        <progress
          className="progress progress-error w-56"
          value="70"
          max="100"
        ></progress>
      </div>
      {/* 7 */}
      <div className="flex justify-between items-center">
        <p>Express</p>
        <progress
          className="progress progress-error w-56"
          value="50"
          max="100"
        ></progress>
      </div>
    </div>
  );
};

export default Skills;
