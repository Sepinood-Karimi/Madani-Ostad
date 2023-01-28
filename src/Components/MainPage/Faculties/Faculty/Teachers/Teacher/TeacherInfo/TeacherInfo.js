import classes from "./TeacherInfo.module.css";
import classnames from "classnames";
import Button from "../../../../../../UI/Button/Button/Button";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
const TeacherInfo = () => {
  const params = useParams();
  const [teacher, setTeacher] = useState({});
  const [faculty, setFaculty] = useState("");
  const getTeacher = async () => {
    const response = await fetch(
      `https://api.kodoomostad.rezakargar.ir/api/v1/Professors/${params.id}`
    );
    const data = await response.json();
    return data.data;
  };

  useEffect(() => {
    getTeacher().then((teacher) => setTeacher(teacher));
  }, [getTeacher]);
  const getFaculty = async () => {
    const response = await fetch(
      `https://api.kodoomostad.rezakargar.ir/api/v1/Faculties/${teacher.facultyId}`
    );
    const data = await response.json();
    return data.data;
  };

  useEffect(() => {
    getFaculty().then((faculty) => setFaculty(faculty));
  }, [getFaculty]);

  return (
    <div className={classnames(classes["teacher-info"])}>
      <div className={classnames(classes["name__position"])}>
        <h3>{teacher.name}</h3>
        <Button className={classes["teacher-button"]}>استاد</Button>
      </div>
      <div className={classnames(classes.faculty)}>
        <p> : دانشکده</p>
        {/*<h4>{faculty.name}</h4>*/}
      </div>
      <div className={classnames(classes.score)}>
        <p className={classnames(classes["score-title"])}>: امتیاز از 10</p>
        <h4>9.8</h4>
      </div>
    </div>
  );
};

export default TeacherInfo;
