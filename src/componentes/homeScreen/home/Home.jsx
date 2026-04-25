import React from "react";

import HeroSection from "../HeroSections/HeroSection";
import About from "../about/About";
import Skills from "../skils/Skils";
import Services from "../services/Services";
import Project from "../../../pages/Home/project/Project";
import ContactPage from "../contactpage/ContactPage";
const Home = () => {
  return (
    <>
      <div id="home">
        <HeroSection />
      </div>

      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="services">
        <Services />
      </div>
      <div id="projects">
        <Project />
      </div>
      <div id="contact">
        <ContactPage />
      </div>

    </>
  );
};

export default Home;
