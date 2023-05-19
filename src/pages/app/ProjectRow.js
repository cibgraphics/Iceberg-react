import { Link } from "react-router-dom";

const ProjectRow = (props) => {
	return (
    <tr>
      <td>{props.project_name}</td>
      <td>{props.client_name}</td>
      <td>{props.component_amount}</td>
      <td>{props.estimate_total}</td>
      <td className="table-row-actions">
        <Link to="#0">
          <i className="icon-more_vert more-icon"></i>
        </Link>
      </td>
    </tr>
  );
};

export default ProjectRow