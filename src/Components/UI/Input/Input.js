import classes from "./Input.module.css";
import classnames from "classnames";

const Input = ({ id, labelText, type, placeHolder, className }) => {
  return (
    <>
      <label htmlFor={id} className={classnames(classes.label)}>
        {labelText}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeHolder}
        className={classnames(classes.input, className)}
      />
    </>
  );
};

export default Input;
