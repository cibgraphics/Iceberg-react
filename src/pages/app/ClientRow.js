import { Link } from "react-router-dom";

const ClientRow = (props) => {
  return (
    <tr>
      <td>{props.client_name}</td>
      <td>{props.project_total}</td>
      <td>
        <Link to="#0">...</Link>
      </td>
    </tr>
  );
};

export default ClientRow;
