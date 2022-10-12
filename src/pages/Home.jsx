import React, { useEffect } from "react";
import { useGlobalData } from "../AppContext";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Hero from "../components/HeroSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import About from "./About"
import Contact from "./Contact"
const Home = () => {
  const { activateIsHomePage, deActivateIsHomePage } = useGlobalData();
  useEffect(() => {
    activateIsHomePage();
    return () => {
      deActivateIsHomePage();
    };
  }, [activateIsHomePage,deActivateIsHomePage]);
  return (
    <>
      <Hero />
      <div className="container-fluid bgDark1">
        <Education />
      </div>
      <div className="container-fluid bgDark2 py-5">
      <Skills />
      </div>
      <div className="container-fluid bgDark1">

      <div className="container  py-3">
        <Experience />
      </div>
      </div>
      <Projects />
      <About />
      <Contact />
    </>
  );
};

export default Home;
