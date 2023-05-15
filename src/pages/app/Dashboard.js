import ProjectRow from "./ProjectRow";

const data = [{"id":1,"project_name":"Daltfresh","client_name":"Murazik, O'Keefe and Corkery","component_amount":62,"estimate_total":158},
{"id":2,"project_name":"Treeflex","client_name":"Champlin-McLaughlin","component_amount":28,"estimate_total":288},
{"id":3,"project_name":"Kanlam","client_name":"Hoppe, Jaskolski and Goodwin","component_amount":100,"estimate_total":114},
{"id":4,"project_name":"Viva","client_name":"Mante-Hirthe","component_amount":19,"estimate_total":158},
{"id":5,"project_name":"Subin","client_name":"Schmeler Group","component_amount":44,"estimate_total":58},
{"id":6,"project_name":"Sub-Ex","client_name":"Macejkovic Inc","component_amount":35,"estimate_total":97},
{"id":7,"project_name":"Solarbreeze","client_name":"Bernier-Kutch","component_amount":67,"estimate_total":159},
{"id":8,"project_name":"Keylex","client_name":"Medhurst Group","component_amount":86,"estimate_total":202},
{"id":9,"project_name":"Otcom","client_name":"Wilkinson Group","component_amount":75,"estimate_total":128},
{"id":10,"project_name":"It","client_name":"Parker LLC","component_amount":80,"estimate_total":242},
{"id":11,"project_name":"Zamit","client_name":"Strosin LLC","component_amount":78,"estimate_total":68},
{"id":12,"project_name":"Latlux","client_name":"Wilderman Group","component_amount":39,"estimate_total":106},
{"id":13,"project_name":"Trippledex","client_name":"Smith Group","component_amount":66,"estimate_total":183},
{"id":14,"project_name":"Wrapsafe","client_name":"Dooley Group","component_amount":52,"estimate_total":165},
{"id":15,"project_name":"Ronstring","client_name":"Herzog, Rolfson and Bauch","component_amount":5,"estimate_total":133},
{"id":16,"project_name":"Tin","client_name":"Gislason Inc","component_amount":42,"estimate_total":267},
{"id":17,"project_name":"Fixflex","client_name":"Keeling, Rempel and Feil","component_amount":37,"estimate_total":179},
{"id":18,"project_name":"Tempsoft","client_name":"Jerde Inc","component_amount":2,"estimate_total":291},
{"id":19,"project_name":"Domainer","client_name":"Sipes Inc","component_amount":92,"estimate_total":54},
{"id":20,"project_name":"Prodder","client_name":"Rippin LLC","component_amount":78,"estimate_total":257}]

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <table style={{width: '100%'}}>
        <thead>
          <tr>
            <th>Project Name</th>
            <th>Client Name</th>
            <th>Components</th>
            <th>Estimate</th>
            <th></th>
          </tr>
        </thead>
        {data.map((data) => (
          <ProjectRow 
            key={data.id}
            project_name={data.project_name}
            client_name={data.client_name}
            component_amount={data.component_amount}
            estimate_total={data.estimate_total}
          />
        ))}
      </table>
      
    </div>
  );
};

export default Dashboard