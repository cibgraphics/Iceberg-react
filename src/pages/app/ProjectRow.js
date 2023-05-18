import { Link } from "react-router-dom";

const ProjectRow = (props) => {
	return (
		<tr>
			<td>{props.project_name}</td>
			<td>{props.client_name}</td>
			<td>{props.component_amount}</td>
			<td>{props.estimate_total}</td>
			<td><Link to="#0">...</Link></td>
		</tr>
	);
};

export default ProjectRow