import React from 'react';
import ContactPage from '../ContactPage';
import ProjectsPage from '../ProjectsPage';

const CubeLayout = () => {
  return (
    <div className="cube">
      <div className="cube__face cube__face--front">front</div>
      <div className="cube__face cube__face--back">
        <ProjectsPage />
      </div>
      <div className="cube__face cube__face--right">right</div>
      <div className="cube__face cube__face--left">left</div>
      <div className="cube__face cube__face--top">
        <ContactPage />
      </div>
      <div className="cube__face cube__face--bottom">bottom</div>
    </div>
  );
};

export default CubeLayout;
