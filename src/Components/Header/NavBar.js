import Button from "../UI/Button";
import Search from "../Search/Search";

const NavBar = () => {
    return (
        <>
            <h4>LOGO</h4>
            <span>
                <h3>مدنی استاد </h3>
                <p>!این بار تو به اساتید نمره بده</p>
            </span>
            <span>
                <Search placeholder="دنبال کدوم استاد می گردی ؟"/>
            </span>
            <nav>
                <Button>ورود</Button>
                <a> دانشکده ها </a>
                <a> تماس با ما </a>
                <a> ثبت نام </a>
            </nav>
        </>
    );
};
export default NavBar;