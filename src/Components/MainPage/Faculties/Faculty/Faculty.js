import classes from "./Faculty.module.css";
import mainClasses from "../../../UI/Common/common.module.css";
import useBooleanState from "../../../../Hooks/use-BooleanState";
import NewTeacher from "../New/NewTeacher";
import AllTeachers from "./Teachers/AllTeachers/AllTeachers";

const Faculty = ({ faculty }) => {
  const allTeachersModal = useBooleanState();
  const newTeacherModal = useBooleanState();

  const openNewTeacherModal = () => {
    allTeachersModal.close();
    newTeacherModal.open();
  };

  return (
    <div className={classes.faculty}>
      <p className={classes["faculty-title"]}>دانشکده</p>
      <h4 className={classes["faculty-name"]}>{faculty.name}</h4>
      <ul className={classes.teachers}>
        {faculty.professors.slice(0, 4).map((proffesor) => (
          <li
            className={classes.teacher + " " + mainClasses["hand-cursor"]}
            key={proffesor.id}
          >
            {proffesor.name}
          </li>
        ))}
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
