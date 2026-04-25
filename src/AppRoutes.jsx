import React, { Suspense, lazy } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import LayoutMain from "./layout/LayoutMain";
import Loader from "./common/loader/Loader";

const Home = lazy(() => import("./componentes/homeScreen/home/Home"));
const About = lazy(() => import("./componentes/homeScreen/about/About"));
const Skills = lazy(() => import("./componentes/homeScreen/skils/Skils"));
const Services = lazy(() => import("./componentes/homeScreen/services/Services"));
const Projects = lazy(() => import("./pages/Home/project/Project"));
const Contact = lazy(() => import("./componentes/homeScreen/contactpage/ContactPage"));
const ProjectDetail = lazy(() => import("./componentes/ProjectDetail/ProjectDetail"));
const ExploreServices = lazy(() => import("./componentes/exploreServices/ExploreServices"));
const ExploreMoreExperties = lazy(() => import("./componentes/exploreServices/ExploreMoreExperties"));


const AppRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />

        <Route path="/" element={<LayoutMain />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="skills" element={<Skills />} />
          <Route path="services" element={<Services />} />
          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />
          <Route path="project/:projectId" element={<ProjectDetail />} />
          <Route path="all-services" element={<ExploreServices />} />
          <Route path="expertises" element={<ExploreMoreExperties />} />
        </Route>

        <Route
          path="*"
          element={
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                fontSize: "1.5rem",
                color: "#6b7280",
              }}
            >
              Page Not Found
            </div>
          }
        />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
