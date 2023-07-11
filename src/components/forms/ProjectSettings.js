const ProjectSettings = () => {
  return (
    <>
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
            <select name="" id="">
              <option>Client Name</option>
              <option>Client Name</option>
            </select>
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
    </>
  );
};

export default ProjectSettings;
