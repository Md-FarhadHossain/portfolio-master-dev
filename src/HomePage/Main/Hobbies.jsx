import React from "react";
import image1 from "../../assets/h-1.jpg";
import image2 from "../../assets/h-2.jpg";
import image3 from "../../assets/h-3.jpg";
const Hobbies = () => {
  return (
    <div className="bg-white rounded-lg px-8 py-5">
      <h1 className="text-2xl mb-6">Hobbies</h1>
      <div className="grid gap-5">
        {/* 1 */}
        <div>
          <img
            className=" w-full h-36 object-cover rounded-2xl"
            src={image1}
            alt="image"
          />
          <h2 className="mt-3 text-xl font-semibold">Reading</h2>
          <p className="mt-1">A reader lives a thousand lives before he dies.</p>
        </div>
        {/* 2 */}
        <div>
          <img
            className=" w-full h-36 object-cover rounded-2xl"
            src={image2}
            alt="image"
          />
          <h2 className="mt-3 text-xl font-semibold">Biking</h2>
          <p className="mt-1">You are one ride away from a good mood.</p>
        </div>
        {/* 3 */}
        <div>
          <img
            className=" w-full h-36 object-cover rounded-2xl"
            src={image3}
            alt="image"
          />
          <h2 className="mt-3 text-xl font-semibold">Traveling</h2>
          <p className="mt-1">Dare to live the life you've always wanted.</p>
        </div>
      </div>
    </div>
  );
};

export default Hobbies;
