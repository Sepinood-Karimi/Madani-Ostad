import mainClasses from "../../../../../UI/Common/common.module.css";
import Modal from "../../../../../UI/Modal/Modal";
import classes from "./AllTeachers.module.css";
import classnames from "classnames";

const AllTeachers = ({ isOpen, close, openNewTeacherModal }) => {
  return (
    <Modal
      additionalModalClasses={classnames(classes["all-teachers__modal"])}
      isOpen={isOpen}
      closeModal={close}
    >
      <div>
        <p className={classnames(classes["title"])}>دانشکده</p>
        <h4 className={classnames(classes["faculty-name"])}> فناوری اطلاعات</h4>
        <ul className={classnames(classes["teachers"])}>
          <li
            className={classnames(
              mainClasses["hand-cursor"],
              classes["teacher"]
            )}
          >
            مهدی هاشم زاده
          </li>
          <li
            className={classnames(
              mainClasses["hand-cursor"],
              classes["teacher"]
            )}
          >
            مهدی هاشم زاده
          </li>
          <li
            className={classnames(
              mainClasses["hand-cursor"],
              classes["teacher"]
            )}
          >
            مهدی هاشم زاده
          </li>
          <li
            className={classnames(
              mainClasses["hand-cursor"],
              classes["teacher"]
            )}
          >
            مهدی هاشم زاده
          </li>
          <li
            className={classnames(
              mainClasses["hand-cursor"],
              classes["teacher"]
            )}
          >
            مهدی هاشم زاده
          </li>
          <li
            className={classnames(
              mainClasses["hand-cursor"],
              classes["teacher"]
            )}
          >
            مهدی هاشم زاده
          </li>
          <li
            className={classnames(
              mainClasses["hand-cursor"],
              classes["teacher"]
            )}
          >
            مهدی هاشم زاده
          </li>
          <li
            className={classnames(
              mainClasses["hand-cursor"],
              classes["teacher"]
            )}
          >
            مهدی هاشم زاده
          </li>
          <li
            className={classnames(
              mainClasses["hand-cursor"],
              classes["teacher"]
            )}
          >
            مهدی هاشم زاده
          </li>
          <li
            className={classnames(
              mainClasses["hand-cursor"],
              classes["teacher"]
            )}
          >
            مهدی هاشم زاده
          </li>
          <li
            className={classnames(
              mainClasses["hand-cursor"],
              classes["teacher"]
            )}
          >
            مهدی هاشم زاده
          </li>
        </ul>
        <p
          className={classnames(
            mainClasses["hand-cursor"],
            classes["new-teacher"]
          )}
          onClick={openNewTeacherModal}
        >
          پیشنهاد استاد جدید
        </p>
      </div>
    </Modal>
  );
};

export default AllTeachers;
