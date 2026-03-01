import React from "react";
import Footer from "../../../common/footer/Footer";
import HeroSection from "../HeroSections/HeroSection";
import Header from "../Header/Header";
import About from "../about/About";
import Skills from "../skils/Skils";
import Services from "../services/Services";
import Project from "../../../pages/Home/project/Project";
import ContactPage from "../contactpage/ContactPage";
const Home = () => {
  return (
    <>
      <div id="home">
        <Header />
      </div>
      <HeroSection />
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
      <Footer />
    </>
  );
};

export default Home;
