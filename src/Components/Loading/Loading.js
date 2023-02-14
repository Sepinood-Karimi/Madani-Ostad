import Modal from "../UI/Modal/Modal";
import classnames from "classnames";
import classes from "./Loading.module.css";

const Loading = () => {
  return (
    <Modal
      isOpen={true}
      additionalModalClasses={classnames(classes.loading)}
      additionalOverlayClasses={classnames(classes["loading-background"])}
    >
      <p className={classnames(classes["loading-title"])}>لطفا صبر کنید</p>
      <p className={classnames(classes["loading-text"])}>
        ... در حال انتقال به صفحه ای دیگر
      </p>
    </Modal>
  );
};
export default Loading;
