import classes from "./Search.module.css";
import { useRef, useState } from "react";
import classnames from "classnames";
import commonClasses from "../UI/Common/common.module.css";
import { useNavigate } from "react-router";

const Search = ({ placeholder }) => {
  const [teachersList, setTeachersList] = useState([]);
  const teacherInputRef = useRef();
  const navigate = useNavigate();

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

  const onSearch = (e) => {
    e.preventDefault();
    const professors = teachersList.filter(
      (teacher) => teacher.name === teacherInputRef.current.value
    );
    navigate(`/professor/${professors[0].id}`);
    teacherInputRef.current.value = "";
  };

  return (
    <form onSubmit={onSearch} className={classnames(classes["search-form"])}>
      <button
        className={classnames(
          classes["search-button"],
          commonClasses["hand-cursor"]
        )}
      >
        <i className="fa fa-search" aria-hidden="true"></i>
      </button>
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
