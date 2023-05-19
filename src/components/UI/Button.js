const Button = (props) => {
  return (
    <a
      href={props.link}
      className={`button${props.class ? " " + props.class : ""}`}
    >
      {props.icon && (
        <div className="button-icon">
          <i className={props.icon}></i>
        </div>
      )}
      {props.buttonText}
    </a>
  );
}

export default Button