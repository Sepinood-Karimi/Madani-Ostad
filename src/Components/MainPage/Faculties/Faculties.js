import classes from "./Faculties.module.css";
import mainClasses from "../../UI/Common/common.module.css";
import Faculty from "./Faculty/Faculty";

const Faculties = () => {
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
            >
              {" "}
              پیشنهاد دانشکده جدید
            </h4>
          </div>
          <p className={classes["faculties-explanation"]}>
            {" "}
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
    </section>
  );
};

export default Faculties;