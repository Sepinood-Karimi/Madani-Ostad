import classnames from "classnames";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";

const Overlay = ({ children, additionalModalClasses }) => {
  return (
    <div className={classnames(classes.overlay)}>
      <div className={classnames(classes.modal, additionalModalClasses)}>
        {children}
      </div>
    </div>
  );
};
const Modal = ({ children, additionalModalClasses }) => {
  return createPortal(
    <Overlay
      children={children}
      additionalModalClasses={additionalModalClasses}
    />,
    document.getElementById("overlays")
  );
};
export default Modal;
