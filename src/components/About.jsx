import React, { useState } from "react";
import { items } from "./items";
import SocialMedia from "./common/Socialmedia";

const moreAboutSections = [
  {
    title: "Education",
    content: "BE Electronics and Communication Engineering",
  },
  {
    title: "Certification",
    content:
      "Successfully completed Full Stack Web Developer course at Error Makes Clever Academy.",
  },
  {
    title: "Languages",
    content: "English, Malayalam, Tamil",
  },
  {
    title: "Contact",
    content: "Email: v.kowsalyabe@gmail.com",
  },
];

function About() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <section className="bg-blue-50 flex flex-col items-center min-h-screen font-sans mt-20">
      <header>
        <h1 className="font-bold text-4xl p-7 text-center animate-fade-in">
          About
        </h1>
      </header>
      <article className="px-5 text-justify  max-w-6xl">
        <p className="mb-5">
        Hi, I'm Kowsalya Murukesh, I’m passionate about building intuitive and responsive web applications using tools like React, Node.js, and Express. I’m focused on expanding my skills and excited to apply them in real-world projects. I aspire to contribute to innovative projects that solve real-world problems and make a positive impact on users.

        </p>
        <p className=" mb-5">
        I aim to become a highly skilled developer who can collaborate effectively with teams to build robust, scalable, and user-friendly web applications. My focus is on learning best practices, improving code quality, and delivering projects that exceed expectations.
        </p>
        <p className="mb-5">My ultimate goal is to contribute to meaningful projects that merge creativity and functionality, empowering businesses to achieve their digital goals. I hope to grow into a leadership role where I can mentor others and drive innovative solutions.</p>
      </article>

<SocialMedia></SocialMedia>

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          toggleVisibility();
        }}
        className="text-blue-500 underline text-2xl font-serif mt-5 mb-4 transition hover:text-blue-700"
      >
        For more about me ({isVisible ? "hide" : "show"})
      </a>

      <div
        className={`mt-5 transition-all duration-500 ease-in-out transform ${
          isVisible ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        } overflow-hidden w-full sm:w-3/4 lg:w-2/3`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {moreAboutSections.map((section, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded shadow-md border-t-2 border-gray-400 transition transform hover:scale-105 hover:shadow-lg"
            >
              <h1 className="font-bold text-xl">{section.title}</h1>
              <p className="mt-2 text-sm text-gray-600">{section.content}</p>
            </div>
          ))}
        </div>
      </div>

      <h1 className="font-bold text-4xl p-5 text-center mt-10 mb-5">Skills</h1>
      <div className="p-8 bg-white rounded-md mb-10 shadow-lg">
        {items && items.length > 0 ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {items.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-4 transform transition hover:scale-110"
              >
                <img
                  src={item.src}
                  alt={item.name}
                  className="w-32 h-32 mb-2 animate-fade-in"
                />
                <p className="text-center font-medium">{item.name}</p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No items to display</p>
        )}
      </div>
    
    </section>
  );
}

export default About;
