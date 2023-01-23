import classnames from "classnames";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";
import { useEffect } from "react";

const Modal = ({ isOpen, children, additionalModalClasses, closeModal }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

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
