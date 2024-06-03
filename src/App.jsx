import React, {useEffect} from "react";
import Aos from "aos";
import "aos/dist/aos.css"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";


function App() {
  useEffect(() => {
    Aos.init();
  }, [])
  
  return (
    <>
      <Navbar />
      <div className="container">
        <Home />
        <Experience />
        <Skills/>
        <Projects/>
        <Contact/>
      </div>
    </>
  )
}

export default App
