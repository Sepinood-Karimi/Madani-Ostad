import Modal from "../Modal/Modal";
import classnames from "classnames";
import classes from "./Additional.module.css";

const Additional = ({ title, text }) => {
  return (
    <Modal
      isOpen={true}
      additionalModalClasses={classnames(classes.loading)}
      additionalOverlayClasses={classnames(classes["loading-background"])}
    >
      <p className={classnames(classes["loading-title"])}>{title}</p>
      <p className={classnames(classes["loading-text"])}>{text}</p>
    </Modal>
  );
};
export default Additional;
