import React from "react";
import recipe from "../assets/recipe.png";
import gallery from "../assets/gallery.png";
import checkout from "../assets/checkout.png";

const Projects = () => {
  const projectsData = [
    {
      id: 1,
      image: recipe,
      hashTag: "#HTML #CSS #responsive",
      title: "Recipe Blog",
      description:
        "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    },
    {
      id: 2,
      image: gallery,
      hashTag: "#HTML #CSS #responsive",
      title: "My Gallery",
      description:
        "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    },
    {
      id: 3,
      image: checkout,
      hashTag: "#HTML #CSS #responsive",
      title: "Checkout",
      description:
        "In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io",
    },
  ];

  return (
    <div>
      <div className="bg-white px-8 py-5 rounded-lg mb-8">
        <h1 className="text-lg mb-4">Projects (3)</h1>
        <button className="btn btn-outline btn-sm">React</button>
        <button className="btn btn-outline mx-4 btn-sm">MERN</button>
        <button className="btn bg-[#2F80ED] text-white btn-sm">
          Responsive
        </button>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {projectsData.map((project) => (
          <div className="rounded-lg bg-white p-5" key={project.id}>
            <img
              className="rounded-lg"
              src={project.image}
              alt={project.title}
            />
            <p className="mt-4">{project.hashTag}</p>
            <h4 className="text-lg my-6 font-semibold">{project.title}</h4>
            <p>{project.description}</p>
            <div className="mt-6 grid gap-3 grid-cols-2">
              <button className="btn border-none hover:bg-black bg-[#2F80ED] text-white btn-sm">
                Demo
              </button>
              <button className="btn btn-outline text-[#2F80ED] border-[#2F80ED] btn-sm">
                Code
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-end mt-8">
        <div className="flex gap-2">
          <button className="btn rounded-md border-[#2F80ED] px-5 btn-outline"> {'<'} </button>
          <button className="btn rounded-md border-[#2F80ED] px-5 btn-outline">1</button>
          <button className="btn rounded-md border-[#2F80ED] px-5 bg-[#2F80ED] text-white">2</button>
          <button className="btn rounded-md border-[#2F80ED] px-5 btn-outline">3</button>
          <button className=" rounded-md px-5 btn-outline border-[#2F80ED] text-3xl disabled">...</button>
          <button className="btn rounded-md border-[#2F80ED] px-5 btn-outline">10</button>
          <button className="btn rounded-md border-[#2F80ED] px-5 btn-outline">{'>'}</button>
        </div>
      </div>
    </div>
  );
};

export default Projects;
