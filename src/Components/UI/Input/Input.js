import React from "react";
import classes from "./Input.module.css";
import classnames from "classnames";

const Input = React.forwardRef(
  ({ id, labelText, type, placeHolder, className }, ref) => {
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
          ref={ref}
        />
      </>
    );
  }
);

export default Input;
