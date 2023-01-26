import classes from "./Button.module.css";
import mainClasses from "../../Common/common.module.css";
import classnames from "classnames";

const Button = ({ children, className, buttonAction }) => {
  const buttonClicked = () => {
    buttonAction();
  };
  return (
    <button
      className={classnames(
        classes["button"],
        className,
        mainClasses["hand-cursor"]
      )}
      onClick={buttonClicked}
    >
      {children}
    </button>
  );
};

export default Button;
