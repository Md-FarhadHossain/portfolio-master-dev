import React from "react";
import profile from "../assets/profile.png";
import { FiMail, FiPhone } from "react-icons/fi";

const AboutMe = () => {
  return (
    <div className="bg-white flex lg:flex-row md:flex-row flex-col gap-8 justify-between p-6 rounded-xl">
      {/* Left side */}
      <div>
        <img className="w-full rounded-xl" src={profile} alt="profile" />
      </div>
      {/* Right side */}
      <div>
        {/* Top section */}
        <div className="flex items-center justify-between lg:flex-row md:flex-row flex-col">
          {/* Left */}
          <div>
            <h2 className="text-2xl font-semibold">Farhad Hossain</h2>
            <p>MERN stack developer</p>
          </div>

          {/* Right */}
          <div className="mt-4 lg:mt-0 md:mt-0">
            <p className="flex items-center text-center">
              <span>
                <FiMail />
              </span>{" "}
              <span className="ml-2 font-semibold"> farhadhossain0153@gmail.com </span>
            </p>
            <p className="flex items-center justify-center lg:justify-start md:justify-start">
              <span>
                <FiPhone />
              </span>{" "}
             <p className="ml-2 font-semibold text-center"> (+880) 1754 924 587</p>
            </p>
          </div>
        </div>
        {/* Bottom section */}
        <div>
          <p className="mt-6">
            Self-motivated developer, who is willing to learn and create
            outstanding <br /> full stack applications.
          </p>
          <p className="mt-6">
          A MERN stack developer is an expert in MongoDB, Express, React and Node. They are proficient in JavaScript and use HTML, CSS and JavaScript to handle front-end operations and JavaScript with Node. js to handle back-end operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
