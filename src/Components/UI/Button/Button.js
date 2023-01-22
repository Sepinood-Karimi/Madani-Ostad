import classes from "./Button.module.css";
import mainClasses from "../Common/common.module.css";
import classnames from "classnames";

const Button = ({ children, className }) => {
  return (
    <button
      className={classnames(
        classes["button"],
        className,
        mainClasses["hand-cursor"]
      )}
    >
      {children}
    </button>
  );
};

export default Button;
