import classes from "./Button.module.css";
import mainClasses from "../Common/common.module.css";

const Button = ({ children, className, onClickButton }) => {
  const onButtonClick = () => {
    onClickButton();
  };
  const buttonClasses =
    classes.button + " " + className + " " + mainClasses["hand-cursor"];

  return (
    <button className={buttonClasses} onClick={onButtonClick}>
      {children}
    </button>
  );
};

export default Button;
