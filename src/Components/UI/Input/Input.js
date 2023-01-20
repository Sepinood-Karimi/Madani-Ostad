import classes from "./Input.module.css";
import classnames from "classnames";

// { [className]: id === 12 }
// {'dfasdfasdf': id === 10}
const Input = ({ id, labelText, type, placeHolder, className }) => {
  return (
    <>
      <label htmlFor={id}>{labelText}</label>
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
