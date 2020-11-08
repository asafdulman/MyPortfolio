import { Hero } from "./cmps/Hero";
import { ProjectModal } from "./cmps/ProjectModal";
import {Projects} from "./cmps/Projects";
import React, { useState } from 'react';
import { About } from "./cmps/About";
import { Contact } from "./cmps/Contact";
import { Footer } from "./cmps/Footer";
import { NavBar } from "./cmps/NavBar";



function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [proj, setProj] = useState();

  function openModal(proj) {
    setIsModalOpen(!isModalOpen)
    if (proj) setProj(proj)
    else setProj('')
    
  }

  return (
    <div className="App">
      <NavBar />
      { proj && <ProjectModal openModal={openModal} proj={proj} isModalOpen={isModalOpen}/>}
     <Hero />
     <Projects openModal={openModal}/>
     <About />
     <Contact />
     <Footer/>
    </div>
  );
}

export default App;
