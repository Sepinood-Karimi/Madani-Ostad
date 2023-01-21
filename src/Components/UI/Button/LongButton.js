import classes from "./LongButton.module.css";
import mainClasses from "../Common/common.module.css";
import classnames from "classnames";

const LongButton = ({ children, className, onClickButton }) => {
  const onButtonClick = () => {
    onClickButton();
  };

  return (
    <button
      className={classnames(
        classes["long-button"],
        className,
        mainClasses["hand-cursor"]
      )}
      onClick={onButtonClick}
    >
      {children}
    </button>
  );
};

export default LongButton;
