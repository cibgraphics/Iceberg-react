import Button from "../../components/UI/Button";

const AddProject = () => {
  return (
    <div className="container">
      <div className="content">
        <h1>Add Project</h1>

        <div className="well">
          <div className="gridlex">
            <div className="col-6_sm-12">
              <div className="input-group">
                <label htmlFor="">Project Name</label>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="gridlex">
            <div className="col-6_sm-12">
              <div className="input-group">
                <label htmlFor="">Client</label>
                <input type="text" />
              </div>
            </div>
          </div>
          <div className="gridlex">
            <div className="col-6_sm-12">
              <div className="input-group">
                <label htmlFor="">Estimate Type</label>
                <select name="" id="">
                  <option value="Hours">Hours</option>
                  <option value="Points">Points</option>
                </select>
              </div>
            </div>
          </div>
          <div className="gridlex">
            <div className="col-6_sm-12">
              <div className="input-group">
                <label htmlFor="">Estimate Padding (%)</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>

        <div className="button-group">
          <Button href={"#0"} buttonText={"Save Project"} />
          <Button href={"#0"} buttonText={"Archive"} class={"gray"} />
        </div>
      </div>
    </div>
  );
};

export default AddProject;
