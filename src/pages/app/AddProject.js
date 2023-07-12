import { Link } from "react-router-dom";
import Button from "../../components/UI/Button";
import ProjectSettings from "../../components/forms/ProjectSettings";
import withAuthentication from './../../components/withAuthentication';

const AddProject = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>Add Project</h1>

        <div className="well">
          <ProjectSettings />
        </div>

        <div className="button-group">
          <Link to={"/app/project"} className="button">
            Save Project
          </Link>
          <Button href={"#0"} buttonText={"Archive"} class={"gray"} />
        </div>
      </div>
    </div>
  );
};

export default withAuthentication(AddProject);
