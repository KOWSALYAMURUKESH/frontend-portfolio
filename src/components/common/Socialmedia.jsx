import React from "react";
import 'font-awesome/css/font-awesome.min.css';


function SocialMedia(){
    return(
  
<div className="flex justify-center space-x-6 ">


   {/* LinkedIn Link with Logo */}
   <a
        href="https://www.linkedin.com/in/kowsalya-murukesh-6bb9b82b0/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 transform transition hover:scale-110"
      >
        <i className="fab fa-linkedin fa-3x"></i>
      </a>

      {/* GitHub Link with Logo */}
      <a
        href="https://github.com/KOWSALYAMURUKESH"
        target="_blank"
        rel="noopener noreferrer"
        className="text-black transform transition hover:scale-110"
      >
        <i className="fab fa-github fa-3x"></i>
      </a>

     
      {/* Instagram Link with Logo */}
      <a
        href="https://www.instagram.com/kowsalyakowsivenu/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 transform transition hover:scale-110"
      >
        <i className="fab fa-instagram fa-3x"></i>
      </a>
    </div>

          
)
}

export default SocialMedia
