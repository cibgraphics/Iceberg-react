const ProjectTotal = (props) => {
  return (
    <div className="container project-total">
      <div className="content">
        <p>
          <span>Total:</span> {props.totalHours} Hours
        </p>
      </div>
    </div>
  );
};

export default ProjectTotal;