import { Link } from "react-router-dom";

const ClientRow = (props) => {
  return (
    <tr>
      <td>{props.client_name}</td>
      <td>{props.project_total}</td>
      <td className="table-row-actions">
        <Link to="#0">
          <i className="icon-more_vert more-icon"></i>
        </Link>
      </td>
    </tr>
  );
};

export default ClientRow;
