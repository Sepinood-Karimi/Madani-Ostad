import Button from "../UI/Button";
import Search from "../Search/Search";

const NavBar = () => {
    return (
        <header>
            <div>
                <h2>LOGO</h2>
                <h3>مدنی استاد </h3>
                <p>!این بار تو به اساتید نمره بده</p>
            </div>
            <Search placeholder="دنبال کدوم استاد می گردی ؟"/>
            <nav>
                <Button>ورود <i className="fa fa-user" aria-hidden="true"></i></Button>
                <a> دانشکده ها </a>
                <a> تماس با ما </a>
                <a> ثبت نام </a>
            </nav>
        </header>
    );
};
export default NavBar;