import '../../font-awesome/css/font-awesome.min.css';
import Button from "../UI/Button";
import classes from "./Search.module.css";

const Search = ({placeholder}) => {
    return (
        <form>
            <Button className={classes['search-button']}><i className="fa fa-search" aria-hidden="true"></i></Button>
            <input className={classes['search-input']} placeholder={placeholder}/>
        </form>
    );
};

export default Search;