import classes from "./Faculties.module.css";
import mainClasses from "../../UI/Common/common.module.css";
import Faculty from "./Faculty/Faculty";
import NewFaculty from "./New/NewFaculty";
import useBooleanState from "../../../Hooks/use-BooleanState";

const Faculties = () => {
  const newFaculty = useBooleanState();
  return (
    <section>
      <div className={classes["faculties-title"]}>
        <div className={classes["faculties-icon"]}>
          <i className="fa fa-university" aria-hidden="true"></i>
        </div>
        <div>
          <div className={classes["faculties-main-titles"]}>
            <h3 className={classes["faculties-main-title"]}>دانشکده ها</h3>
            <h4
              className={
                classes["faculties-suggestion"] +
                " " +
                mainClasses["hand-cursor"]
              }
              onClick={() => newFaculty.open()}
            >
              پیشنهاد دانشکده جدید
            </h4>
          </div>
          <p className={classes["faculties-explanation"]}>
            لیست دانشکده ها و اساتید رو میتونی این جا ببینی
          </p>
        </div>
      </div>
      <div className={classes.faculties}>
        <Faculty />
        <Faculty />
        <Faculty />
        <Faculty />
        <Faculty />
        <Faculty />
        <Faculty />
      </div>
      <NewFaculty {...newFaculty} />
    </section>
  );
};

export default Faculties;
