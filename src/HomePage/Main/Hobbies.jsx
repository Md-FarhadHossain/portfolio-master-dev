import React from "react";
import image1 from "../../assets/h-1.jpg";
import image2 from "../../assets/h-2.jpg";
import image3 from "../../assets/h-3.jpg";
const Hobbies = () => {
  return (
    <div className="bg-white rounded-lg">
      <h1 className="text-2xl">Hobbies</h1>
      <div className=" flex flex-col justify-center items-center">
        {/* 1 */}
        <div>
          <img
            className="w-96 h-36 object-cover rounded-2xl"
            src={image1}
            alt="image"
          />
          <h2 className="text-xl font-semibold">Reading</h2>
          <p>A reader lives a thousand lives before he dies </p>
        </div>
        {/* 2 */}
        <div>
          <img
            className="w-96 h-36 object-cover rounded-2xl"
            src={image2}
            alt="image"
          />
          <h2 className="text-xl font-semibold">Biking</h2>
          <p>A reader lives a thousand lives before he dies </p>
        </div>
        {/* 3 */}
        <div>
          <img
            className="w-96 h-36 object-cover rounded-2xl"
            src={image3}
            alt="image"
          />
          <h2 className="text-xl font-semibold">Traveling</h2>
          <p>A reader lives a thousand lives before he dies </p>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
