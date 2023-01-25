import classes from "../../Faculty.module.css";
import mainClasses from "../../../../../UI/Common/common.module.css";
import Modal from "../../../../../UI/Modal/Modal";
import allTeachersClasses from "./AllTeachers.module.css";
import classnames from "classnames";

const AllTeachers = ({ isOpen, close, openNewTeacherModal }) => {
  return (
    <Modal
      additionalModalClasses={classnames(
        allTeachersClasses["all-teachers__modal"]
      )}
      isOpen={isOpen}
      closeModal={close}
    >
      <div>
        <p className={classes["faculty-title"]}>دانشکده</p>
        <h4 className={classes["faculty-name"]}> فناوری اطلاعات</h4>
        <ul className={classes.teachers}>
          <li className={classes.teacher + " " + mainClasses["hand-cursor"]}>
            مهدی هاشم زاده
          </li>
          <li className={classes.teacher + " " + mainClasses["hand-cursor"]}>
            مهدی هاشم زاده
          </li>
          <li className={classes.teacher + " " + mainClasses["hand-cursor"]}>
            مهدی هاشم زاده
          </li>
          <li className={classes.teacher + " " + mainClasses["hand-cursor"]}>
            مهدی هاشم زاده
          </li>
          <li className={classes.teacher + " " + mainClasses["hand-cursor"]}>
            مهدی هاشم زاده
          </li>
          <li className={classes.teacher + " " + mainClasses["hand-cursor"]}>
            مهدی هاشم زاده
          </li>
          <li className={classes.teacher + " " + mainClasses["hand-cursor"]}>
            مهدی هاشم زاده
          </li>
          <li className={classes.teacher + " " + mainClasses["hand-cursor"]}>
            مهدی هاشم زاده
          </li>
          <li className={classes.teacher + " " + mainClasses["hand-cursor"]}>
            مهدی هاشم زاده
          </li>
          <li className={classes.teacher + " " + mainClasses["hand-cursor"]}>
            مهدی هاشم زاده
          </li>
          <li className={classes.teacher + " " + mainClasses["hand-cursor"]}>
            مهدی هاشم زاده
          </li>
        </ul>
        <p
          className={classes["all-teachers"] + " " + mainClasses["hand-cursor"]}
          onClick={openNewTeacherModal}
        >
          پیشنهاد استاد جدید
        </p>
      </div>
    </Modal>
  );
};

export default AllTeachers;
