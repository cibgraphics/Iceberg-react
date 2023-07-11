import ClientRow from "../../components/clients//ClientRow";
import Button from "../../components/UI/Button";

const Clients = () => {

  const clientData = 
    [
      {
        "id": 1,
        "first_name": "Deanne",
        "last_name": "Shalliker",
        "client_name": "Smith, Schultz and Wintheiser",
        "project_total": 8
      },
      {
        "id": 2,
        "first_name": "Heall",
        "last_name": "Gillebride",
        "client_name": "Koch, Sipes and Hayes",
        "project_total": 8
      },
      {
        "id": 3,
        "first_name": "Jone",
        "last_name": "Decayette",
        "client_name": "Macejkovic Group",
        "project_total": 8
      },
      {
        "id": 4,
        "first_name": "Dwayne",
        "last_name": "Martill",
        "client_name": "Gulgowski Inc",
        "project_total": 9
      },
      {
        "id": 5,
        "first_name": "Finn",
        "last_name": "Barr",
        "client_name": "Mohr-Little",
        "project_total": 2
      },
      {
        "id": 6,
        "first_name": "Leonid",
        "last_name": "McKennan",
        "client_name": "Zemlak-Beier",
        "project_total": 6
      },
      {
        "id": 7,
        "first_name": "Kara-lynn",
        "last_name": "Spurge",
        "client_name": "Lesch, Predovic and Von",
        "project_total": 6
      },
      {
        "id": 8,
        "first_name": "Bidget",
        "last_name": "O'Suaird",
        "client_name": "Huel Group",
        "project_total": 9
      },
      {
        "id": 9,
        "first_name": "Rozanne",
        "last_name": "Eilhart",
        "client_name": "Lind, Kulas and Wolff",
        "project_total": 1
      },
      {
        "id": 10,
        "first_name": "Godfree",
        "last_name": "Bealton",
        "client_name": "Gerlach LLC",
        "project_total": 9
      },
      {
        "id": 11,
        "first_name": "Clemmy",
        "last_name": "Digginson",
        "client_name": "Harvey Group",
        "project_total": 7
      },
      {
        "id": 12,
        "first_name": "Reggi",
        "last_name": "Mertel",
        "client_name": "Pagac-Bechtelar",
        "project_total": 7
      },
      {
        "id": 13,
        "first_name": "Lorry",
        "last_name": "Zottoli",
        "client_name": "Heaney, Beier and Schmeler",
        "project_total": 1
      },
      {
        "id": 14,
        "first_name": "Egan",
        "last_name": "Canto",
        "client_name": "Hayes Group",
        "project_total": 2
      },
      {
        "id": 15,
        "first_name": "Philis",
        "last_name": "Domenc",
        "client_name": "Gulgowski, Shields and Armstrong",
        "project_total": 6
      },
      {
        "id": 16,
        "first_name": "Killian",
        "last_name": "Spain-Gower",
        "client_name": "Schmidt, Swift and Kerluke",
        "project_total": 9
      },
      {
        "id": 17,
        "first_name": "Wernher",
        "last_name": "Duckers",
        "client_name": "Bartoletti, Upton and Goodwin",
        "project_total": 2
      },
      {
        "id": 18,
        "first_name": "Sal",
        "last_name": "Bramer",
        "client_name": "Okuneva-Mosciski",
        "project_total": 5
      },
      {
        "id": 19,
        "first_name": "Tirrell",
        "last_name": "Gounel",
        "client_name": "Goodwin Inc",
        "project_total": 8
      },
      {
        "id": 20,
        "first_name": "Neils",
        "last_name": "Nano",
        "client_name": "Goyette, Predovic and Jacobi",
        "project_total": 7
      }
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
              <th>Contact Name</th>
              <th>Number of Projects</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {clientData.map((data) => (
              <ClientRow
                key={data.id}
                first_name={data.first_name}
                last_name={data.last_name}
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