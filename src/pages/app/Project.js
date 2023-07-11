import React, { useState } from 'react';
import ProjectTotal from "../../components/project/ProjectTotal";
import ComponentGroup from "../../components/project/ComponentGroup";

const Project = () => {
  const [projectTotalHours, setProjectTotalHours] = useState(0);

  const updateTotalHours = (newTotalHours) => {
    setProjectTotalHours(newTotalHours);
  };

  return (
    <>
      <div className="container project">
        <div className="content">
          <h1>Project Name</h1>

          <div className="project-estimation-workarea">
            <ComponentGroup totalHours={projectTotalHours} updateTotalHours={updateTotalHours} />
            <ComponentGroup totalHours={projectTotalHours} updateTotalHours={updateTotalHours} />
            <ComponentGroup totalHours={projectTotalHours} updateTotalHours={updateTotalHours} />
          </div>
        </div>
      </div>

      <ProjectTotal totalHours={projectTotalHours} />
    </>
  );
};

export default Project;