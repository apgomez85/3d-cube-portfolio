import React from "react";
import ContactPage from "../ContactPage";
import ProjectsPage from "../ProjectsPage";
import HomePage from "../HomePage";
import BlogPage from "../BlogPage";
import ResumePage from "../ResumePage";
import AboutPage from "../AboutPage";

const CubeLayout = () => {
  return (
    <div className="cube">
      <div className="cube__face cube__face--front">
        <HomePage />
      </div>
      <div className="cube__face cube__face--back">
        <ProjectsPage />
      </div>
      <div className="cube__face cube__face--right">
        <ResumePage />
      </div>
      <div className="cube__face cube__face--left">
        <BlogPage />
      </div>
      <div className="cube__face cube__face--top">
        <ContactPage />
      </div>
      <div className="cube__face cube__face--bottom">
        <AboutPage />
      </div>
    </div>
  );
};

export default CubeLayout;
