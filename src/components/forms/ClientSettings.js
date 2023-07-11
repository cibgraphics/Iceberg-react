const ProjectSettings = () => {
  return (
    <>
      <div className="gridlex">
        <div className="col-6_sm-12">
          <div className="input-group">
            <label htmlFor="">Client Name</label>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="gridlex">
        <div className="col-6_sm-12">
          <div className="input-group">
            <label htmlFor="">Contact First Name</label>
            <input type="text" />
          </div>
        </div>
        <div className="col-6_sm-12">
          <div className="input-group">
            <label htmlFor="">Contact Last Name</label>
            <input type="text" />
          </div>
        </div>
      </div>
      <div className="gridlex">
        <div className="col-6_sm-12">
          <div className="input-group">
            <label htmlFor="">Phone Number</label>
            <input type="text" />
          </div>
        </div>
        <div className="col-6_sm-12">
          <div className="input-group">
            <label htmlFor="">Email</label>
            <input type="email" />
          </div>
        </div>
      </div>
     
    </>
  );
};

export default ProjectSettings;
