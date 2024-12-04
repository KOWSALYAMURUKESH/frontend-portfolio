import React from "react";
import Typewriter from "typewriter-effect";
import Kowsi from "../assets/KowsalyaMurukesh.jpeg";
import SocialMedia from "./common/Socialmedia";
import About from "./About";
import Project from "./Project";
import Contact from "./Contact"








function Home() {
   
 

  
    
   

  
  
   
  return (
    <div>
    <div>
      
    <div className="bg-green-50 flex flex-col items-center  justify-center min-h-screen font-serif">
      {/* Card with animation */}
      <div className="text-center p-5 bg-white rounded-lg shadow-xl max-w-sm md:max-w-md lg:max-w-2xl animate-fade-in mt-14 mb-6">
        {/* Profile picture with hover effect */}
        <img
          src={Kowsi}
          alt="Profile photo of Kowsalya Murukesh"
          className="rounded-full w-32 h-32 mx-auto mb-4 md:w-40 md:h-40 lg:w-52 lg:h-52 hover:scale-105 transition-transform duration-300"
        />
        {/* Typewriter animation */}
        <h1 className="text-2xl font-serif text-blue-800 bg-white">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Hi... I am KOWSALYA MURUKESH")
                .pauseFor(3000)
                .deleteAll()
                .typeString("Welcome to my portfolio!")
                .pauseFor(2000)
                .start();
            }}
            options={{
              loop: true,
            }}
          />
        </h1>
        {/* Description */}
        <h2 className="text-lg mt-4 md:text-xl">
          Full Stack Web Developer with expertise in MERN technologies
        </h2>
        
      </div>
        
        <SocialMedia></SocialMedia>
       <a href="./KowsiM resume.pdf" download rel="resume" target="_blank"> <button className="inline-block mt-5 bg-blue-400  text-white font-bold py-2 px-14  rounded hover:bg-green-600 transition duration-300">Resume</button>
       </a>
    </div>
    </div>
    
   
    <About></About>
    
  
    
    
    <Project></Project>
    
    
    <Contact></Contact>
    
  
   
</div>
  );
}

export default Home;
