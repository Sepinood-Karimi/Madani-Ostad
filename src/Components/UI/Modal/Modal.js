import classnames from "classnames";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";
import { useContext, useEffect } from "react";
import LoginContext from "../../../store/login-context";

const Modal = ({ isOpen, children, additionalModalClasses, closeModal }) => {
  const loginCtx = useContext(LoginContext);
  useEffect(() => {
    if (isOpen && !loginCtx.isLoggedIn) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen, loginCtx]);

  if (!isOpen) return null;
  return createPortal(
    <div className={classnames(classes.overlay)} onClick={closeModal}>
      <div
        className={classnames(classes.modal, additionalModalClasses)}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById("overlays")
  );
};
export default Modal;
