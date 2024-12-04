import React from "react";
import Navbar from "./components/common/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Home from "./components/Home";
import WelcomePage from "./components/Welcome";




function App(){
  
  return(
   <div>
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
      <Route path="/home"   
       element={<Home></Home>}></Route>
      <Route path="/about" element={<About></About>}></Route>
      <Route path="/project" element={<Project></Project>}></Route>
      <Route path="/contact" element={<Contact></Contact>}></Route>
      <Route path="/" element={<WelcomePage></WelcomePage>}></Route>
    </Routes>
    </BrowserRouter>

      
   </div>
  )
}

export default App
