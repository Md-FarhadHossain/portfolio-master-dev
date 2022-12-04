import React from "react";
import profile from "../assets/profile.png";
import { FiMail, FiPhone } from "react-icons/fi";

const AboutMe = () => {
  return (
    <div className="bg-white flex lg:flex-row md:flex-row flex-col gap-6 p-6 rounded-xl">
      {/* Left side */}
      <div>
        <img className="w-64 rounded-xl" src={profile} alt="profile" />
      </div>
      {/* Right side */}
      <div>
        {/* Top section */}
        <div className="flex items-center justify-between">
          {/* Left */}
          <div>
            <h2 className="text-2xl font-semibold">Farhad Hossain</h2>
            <p>MERN stack developer</p>
          </div>

          {/* Right */}
          <div className="">
            <p className="flex items-center">
              <span>
                <FiMail />
              </span>{" "}
              farhadhossain0153@gmail.com
            </p>
            <p className="flex items-center">
              <span>
                <FiPhone />
              </span>{" "}
              (+880) 1754 924 587
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
            Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque
            feugiat malesuada molestie.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
