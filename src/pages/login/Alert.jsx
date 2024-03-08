import "./alert.scss";

const Alert = ({ message }) => {
  return (
    <div>
      <div className="alert alert-danger">
        <p>{message}</p>
      </div>
    </div>
  );
};

export default Alert;
