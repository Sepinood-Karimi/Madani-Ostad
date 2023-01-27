import classes from "./TeacherInfo.module.css";
import classnames from "classnames";
import Button from "../../../../../../UI/Button/Button/Button";
const TeacherInfo = () => {
  return (
    <div className={classnames(classes["teacher-info"])}>
      <div className={classnames(classes["name__position"])}>
        <h3>ناصر فرج زاده</h3>
        <Button className={classes["teacher-button"]}>دانشیار</Button>
      </div>
      <div className={classnames(classes.faculty)}>
        <p> : دانشکده</p>
        <h4>فناوری اطلاعات</h4>
      </div>
      <div className={classnames(classes.score)}>
        <p className={classnames(classes["score-title"])}>: امتیاز از 10</p>
        <h4>9.8</h4>
      </div>
    </div>
  );
};

export default TeacherInfo;
