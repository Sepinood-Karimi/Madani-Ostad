import '../../font-awesome/css/font-awesome.min.css';
import Button from "../UI/Button";
import classes from "./Search.module.css";

const Search = ({placeholder}) => {
    return (
        <form>
            <input placeholder={placeholder}/>
            <Button className={classes['search-button']}><i className="fa fa-search" aria-hidden="true"></i></Button>
        </form>
    );
};

export default Search;