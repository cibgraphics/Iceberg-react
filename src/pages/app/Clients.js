import ClientRow from "./ClientRow";
import Button from "../../components/UI/Button";

const Clients = () => {

  const clientData = [
    { id: 1, client_name: "Youfeed", project_total: 7 },
    { id: 2, client_name: "Meevee", project_total: 8 },
    { id: 3, client_name: "Browseblab", project_total: 6 },
    { id: 4, client_name: "Ainyx", project_total: 6 },
    { id: 5, client_name: "Skiptube", project_total: 8 },
    { id: 6, client_name: "Lajo", project_total: 2 },
    { id: 7, client_name: "Pixope", project_total: 5 },
    { id: 8, client_name: "Trilia", project_total: 8 },
    { id: 9, client_name: "Feedmix", project_total: 4 },
    { id: 10, client_name: "Kwideo", project_total: 5 },
    { id: 11, client_name: "Photolist", project_total: 10 },
    { id: 12, client_name: "Skyndu", project_total: 2 },
    { id: 13, client_name: "Jabberstorm", project_total: 5 },
    { id: 14, client_name: "Tagfeed", project_total: 1 },
    { id: 15, client_name: "Trunyx", project_total: 5 },
    { id: 16, client_name: "Camido", project_total: 2 },
    { id: 17, client_name: "Quimba", project_total: 1 },
    { id: 18, client_name: "Thoughtsphere", project_total: 8 },
    { id: 19, client_name: "Cogidoo", project_total: 4 },
    { id: 20, client_name: "Mybuzz", project_total: 3 },
  ];

  return (
    <div className="container">
      <div className="content">
        <div className="page-header">
          <h1>Clients</h1>
          <div className="page-actions">
            <Button link="#0" icon={"icon-add"} buttonText={"Add Client"} />
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>Client Name</th>
              <th>Number of Projects</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {clientData.map((data) => (
              <ClientRow
                key={data.id}
                client_name={data.client_name}
                project_total={data.project_total}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Clients