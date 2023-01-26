import classes from "./RedButton.module.css";
import mainClasses from "../../Common/common.module.css";
import classnames from "classnames";

const RedButton = ({ children, className, buttonAction }) => {
  const buttonClicked = () => {
    buttonAction();
  };
  return (
    <button
      className={classnames(
        classes["red-button"],
        className,
        mainClasses["hand-cursor"]
      )}
      onClick={buttonClicked}
    >
      {children}
    </button>
  );
};

export default RedButton;
