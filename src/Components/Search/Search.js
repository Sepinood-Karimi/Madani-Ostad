import '../../font-awesome/css/font-awesome.min.css';
import Button from "../UI/Button";
const Search = ({placeholder}) => {
    return (
        <form>
            <input placeholder={placeholder}/>
            <Button><i className="fa fa-search" aria-hidden="true"></i></Button>
        </form>
    );
};

export default Search;