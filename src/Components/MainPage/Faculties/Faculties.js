import classes from "./Faculties.module.css";
import mainClasses from "../../UI/Common/common.module.css";
import Faculty from "./Faculty/Faculty";
import NewFaculty from "./New/NewFaculty";
import useBooleanState from "../../../Hooks/use-BooleanState";
import { useEffect, useState } from "react";

const Faculties = () => {
  const newFaculty = useBooleanState();
  const [faculties, setFaculties] = useState([]);
  const getFaculties = async () => {
    const response = await fetch(
      "https://api.kodoomostad.rezakargar.ir/api/v1/Faculties"
    );
    const data = await response.json();
    return data.data;
  };
  useEffect(() => {
    getFaculties().then((faculties) => setFaculties(faculties));
  }, []);
  return (
    <section id="faculties">
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
        {faculties.map((faculty) => (
          <Faculty faculty={faculty} key={faculty.id} />
        ))}
      </div>
      <NewFaculty {...newFaculty} />
    </section>
  );
};

export default Faculties;
