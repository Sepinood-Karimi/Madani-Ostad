import Button from "../UI/Button";
import Search from "../Search/Search";
import classes from './NavBar.module.css';

const NavBar = () => {
    return (
        <header className={classes.header}>
            <div>
                <h3 className={classes.logo}>مدنی استاد </h3>
                <span className={classes['main-title']}>
                    <h2>LOGO</h2>
                    <p>!این بار تو به اساتید نمره بده</p>
                </span>
            </div>
            <Search placeholder="دنبال کدوم استاد می گردی ؟"/>
            <nav className={classes.navbar}>
                <Button>ورود <i className="fa fa-user" aria-hidden="true"></i></Button>
                <a> دانشکده ها </a>
                <a> تماس با ما </a>
                <a> ثبت نام </a>
            </nav>
        </header>
    );
};
export default NavBar;