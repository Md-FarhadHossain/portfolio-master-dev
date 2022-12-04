import React from "react";
import Blog from "./Blog";
import Experiences from "./Experiences";
import Hobbies from "./Hobbies";
import Skills from "./Skills";

const Main = () => {
  return (
    <div className="grid lg:grid-cols-2 gap-8 my-8">
      <div>
        <Skills />
        <Hobbies />
      </div>
      <div>
        <Blog />
        <Experiences />
      </div>
    </div>
  );
};

export default Main;
