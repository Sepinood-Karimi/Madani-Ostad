import Button from "../UI/Button/Button/Button";
import classes from "./Search.module.css";
import { useRef, useState } from "react";

const Search = ({ placeholder }) => {
  const [teachersList, setTeachersList] = useState([]);
  const teacherInputRef = useRef();
  const getTeachers = async () => {
    const response = await fetch(
      "https://api.kodoomostad.rezakargar.ir/api/v1/Professors"
    );
    const data = await response.json();
    return data.data;
  };

  const getTeachersList = () => {
    getTeachers().then((teachers) => setTeachersList(teachers));
  };

  return (
    <form>
      <Button className={classes["search-button"]}>
        <i className="fa fa-search" aria-hidden="true"></i>
      </Button>
      <input
        className={classes["search-input"]}
        placeholder={placeholder}
        list="teachers"
        onClick={getTeachersList}
        ref={teacherInputRef}
      />
      <datalist id="teachers">
        {teachersList.map((teacher) => (
          <option key={teacher.id}>{teacher.name}</option>
        ))}
      </datalist>
    </form>
  );
};

export default Search;
