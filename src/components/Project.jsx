import React from "react";
import ProjectCard from "./Projectcard";
import Greenden from "../assets/Greenden.png";
import Udemy from "../assets/Udemy.png"
import Reestar from "../assets/Reestar.png"
import Counter from "../assets/CounterApp.png"
import Actodo from "../assets/Actodo.png" 
import RandomNum from "../assets/Random Number Generator.png"
import ToDo from "../assets/ToDoList.png"
import WeatherReport from "../assets/Weather Report.png"
import Perfumy from "../assets/Perfumy.png"


// Example project data
const projects = [
  {
    image: Greenden,
    name: "GreenDen",
    description:
      "GreenDen is a responsive and eco-themed webpage built with Tailwind CSS. It features a clean design with a focus on greenery and sustainability.",
    technologies:  ["HTML", "Tailwind CSS"],
    link: "https://kowsalyamurukesh.github.io/greenden-tailwind/",
  },
  {
    image:WeatherReport,
    name:"Weather Report",
    description:"The Weather Report is a React application that provides real-time weather updates for any location. It showcases API integration, dynamic data rendering, and responsive UI design.",
    technologies:["React.js", "JavaScript"],
    link: "https://weather-react-js-ten.vercel.app",
  },
  { 
    image:Actodo,
    name:"ActoDo",
    description:"The To-Do project is a responsive task management application built with React. It allows users to add, delete, and manage tasks efficiently, showcasing React state management and component reusability.",
    technologies:["React.js", "JavaScript"],
    link:"https://actodo-ten-mocha.vercel.app",
  
  
  },
  {
    image:Counter,
    name: "Counter App",
    description:"The Counter project is a simple, interactive React application built to demonstrate state management using React hooks. Users can increment and decrement  the counter value dynamically.",
    technologies:["React.js", "JavaScript"],
    link: "https://counter-react-js-vert.vercel.app",
  
  },

 
  // Add more project objects here
  {
    image: Udemy,
    name:"Udemy",
    description: "Udemy Clone is a responsive webpage inspired by the Udemy platform, built with Tailwind CSS. It features a modern design and clean layout, showcasing courses and categories effectively.",
    technologies:    ["HTML", "Tailwind CSS"],
    link: "https://kowsalyamurukesh.github.io/udemy-clone/",

},
{
    image: Reestar,
    name: "Reestar",
    description: "Reestar is a responsive and modern webpage designed with Tailwind CSS. It features a sleek layout with a focus on simplicity and user-friendly design.",
    technologies:   ["HTML", "Tailwind CSS"],
    link: "https://kowsalyamurukesh.github.io/Reestar/",

},


{
  image:RandomNum,
  name:"Random Number Generator",
  description:"The Random Number Generator is a React application that generates random numbers within a specified range. It demonstrates dynamic input handling and state management in React.",
  technologies:["React.js", "JavaScript"],
  link:"https://randomnumergenerator-react-js.vercel.app",


},
{
  image:ToDo,
  name:"To Do List",
  description:"The To-Do List is a React application that helps users manage tasks effectively. It features task creation, editing, and deletion, showcasing React's state management and dynamic UI capabilities.",
  technologies:["React.js", "JavaScript"],
  link:"https://to-do-list-react-js-five.vercel.app",
},

{
  image:Perfumy,
  name:"Perfumy",
  description:"The Perfumy project is a React application designed to showcase a collection of perfumes. It includes features like product browsing, dynamic content display, and responsive UI design.",
  technologies: ["React.js", "JavaScript"],
  link:"https://perfumy-react-git-main-kowsalya.vercel.app/"
}




];


function Project() {
  return (
    <div className="bg-blue-50 flex flex-col items-center min-h-screen font-sans mt-20 px-5">
      <h1 className="font-bold text-4xl p-7 text-center animate-fade-in">Projects</h1>
      <div className="grid gap-10 lg:grid-cols">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
