import React from "react";

function ProjectCard({ image, name, description, technologies, link }) {
  return (
    <div className="bg-white p-5 rounded-xl flex flex-col lg:flex-row gap-6 shadow-md hover:shadow-lg transition-shadow">
      <img 
        src={image} 
        alt={name} 
        className="w-full lg:w-6/12 rounded-xl transform transition hover:scale-95"
      />
      <div className="w-full text-center lg:text-center">
        <h1 className="font-bold text-3xl p-5">{name}</h1>
        <p className="text-gray-700">{description}</p>
        <h2 className="font-bold pt-4 text-xl">Technologies Used</h2>
        <ul className="list-disc list-inside text-gray-600">
          {technologies.map((tech, index) => (
            <ul key={index}>{tech}</ul>
          ))}
        </ul>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-5 bg-green-500  text-white font-bold py-2 px-4 rounded hover:bg-green-600 transition duration-300"
        >
          View Project
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
