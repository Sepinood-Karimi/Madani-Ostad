import classnames from "classnames";
import classes from "./Modal.module.css";
import { createPortal } from "react-dom";

const Overlay = ({ children, onOverlayClick }) => {
  const onClickOverlay = () => {
    onOverlayClick();
  };
  return (
    <div className={classnames(classes.overlay)} onClick={onClickOverlay}>
      <div className={classnames(classes.modal)}>{children}</div>
    </div>
  );
};
const Modal = ({ children, onClose }) => {
  const onCloseModal = () => {
    onClose();
  };
  return createPortal(
    <Overlay onOverlayClick={onCloseModal} children={children} />,
    document.getElementById("overlays")
  );
};
export default Modal;
