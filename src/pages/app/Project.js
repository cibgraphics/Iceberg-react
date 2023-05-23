import ProjectTotal from "../../components/project/ProjectTotal";
import ComponentGroup from "../../components/project/ComponentGroup";

const Project = () => {
  return (
    <>
      <div className="container project">
        <div className="content">
          <h1>Project Name</h1>

          <div className="project-estimation-workarea">
            <ComponentGroup />
            <ComponentGroup />
            <ComponentGroup />
          </div>
        </div>
      </div>

      <ProjectTotal />
    </>
  );
};

export default Project;
