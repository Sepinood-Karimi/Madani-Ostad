import Button from "../UI/Button/Button/Button";
import classes from "./Search.module.css";
import { useEffect } from "react";

const Search = ({ placeholder }) => {
  const getTeachers = async () => {
    const response = await fetch(
      "https://api.kodoomostad.rezakargar.ir/api/v1/Professors"
    );
    const data = await response.json();
    console.log(data);
  };
  useEffect(() => {
    getTeachers().then();
  }, []);
  return (
    <form>
      <Button className={classes["search-button"]}>
        <i className="fa fa-search" aria-hidden="true"></i>
      </Button>
      <input className={classes["search-input"]} placeholder={placeholder} />
    </form>
  );
};

export default Search;
