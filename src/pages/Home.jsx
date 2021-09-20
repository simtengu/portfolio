import React, { useEffect } from "react";
import { useGlobalData } from "../AppContext";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Hero from "../components/HeroSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
const Home = () => {
  const { activateIsHomePage, deActivateIsHomePage } = useGlobalData();
  useEffect(() => {
    activateIsHomePage();
    return () => {
      deActivateIsHomePage();
    };
  }, []);
  return (
    <>
      <Hero />
      <div className="container">
        <Education />
        <Skills />
        <Experience />
        <Projects />
      </div>
    </>
  );
};

export default Home;
