import React from 'react';
import ContactPage from '../ContactPage';
import ProjectsPage from '../ProjectsPage';
import HomePage from '../HomePage';
import BlogPage from '../BlogPage';

const CubeLayout = () => {
  return (
    <div className="cube">
      <div className="cube__face cube__face--front">
        <HomePage />
      </div>
      <div className="cube__face cube__face--back">
        <ProjectsPage />
      </div>
      <div className="cube__face cube__face--right">right</div>
      <div className="cube__face cube__face--left">
        <BlogPage />
      </div>
      <div className="cube__face cube__face--top">
        <ContactPage />
      </div>
      <div className="cube__face cube__face--bottom">bottom</div>
    </div>
  );
};

export default CubeLayout;
