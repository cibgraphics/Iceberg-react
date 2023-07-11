import { Link } from "react-router-dom";
import ClientSettings from "../../components/forms/ClientSettings";

const AddProject = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>Add Client</h1>

        <div className="well">
          <ClientSettings />
        </div>

        <div className="button-group">
          <Link to={"/app/clients"} className="button">
            Save Client
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AddProject;
