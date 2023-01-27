import classes from "./LongButton.module.css";
import mainClasses from "../../Common/common.module.css";
import classnames from "classnames";
import LoadingSvg from "../../../../SVG/LoadingSvg";
import { useContext } from "react";
import LoginContext from "../../../../store/login-context";

const LongButton = ({
  children,
  className,
  onClickButton,
  additionalClassNames,
}) => {
  const onButtonClick = () => {
    onClickButton();
  };

  const loginCtx = useContext(LoginContext);

  return (
    <button
      className={classnames(
        classes["long-button"],
        className,
        mainClasses["hand-cursor"],
        additionalClassNames
      )}
      onClick={onButtonClick}
    >
      {loginCtx.loading && (
        <div className={classnames(classes["button-svg"])}>
          <LoadingSvg width={30} />
        </div>
      )}
      {children}
    </button>
  );
};

export default LongButton;
