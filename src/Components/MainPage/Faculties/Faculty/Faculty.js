import classes from "./Faculty.module.css";
import mainClasses from "../../../UI/Common/common.module.css";
import useBooleanState from "../../../../Hooks/use-BooleanState";
import NewTeacher from "../New/NewTeacher";
import AllTeachers from "./Teachers/AllTeachers/AllTeachers";

const Faculty = () => {
  const allTeachersModal = useBooleanState();
  const newTeacherModal = useBooleanState();

  const openNewTeacherModal = () => {
    allTeachersModal.close();
    newTeacherModal.open();
  };

  return (
    <div className={classes.faculty}>
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
      </ul>
      <p
        className={classes["all-teachers"] + " " + mainClasses["hand-cursor"]}
        onClick={() => allTeachersModal.open()}
      >
        مشاهده همه اساتید
      </p>
      <AllTeachers
        {...allTeachersModal}
        openNewTeacherModal={openNewTeacherModal}
      />
      <NewTeacher {...newTeacherModal} />
    </div>
  );
};

export default Faculty;
