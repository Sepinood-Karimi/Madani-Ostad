import Button from "../UI/Button/Button";
import Search from "../Search/Search";
import classes from "./NavBar.module.css";
import mainClasses from "../UI/Common/common.module.css";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import useBooleanState from "../../Hooks/use-BooleanState";

const NavBar = () => {
  const loginModal = useBooleanState();
  const signUpModal = useBooleanState();
  return (
    <header className={classes.header}>
      <div>
        <h3 className={classes.logo}>مدنی استاد </h3>
        <span className={classes["main-title"]}>
          <h2>LOGO</h2>
          <p>!این بار تو به اساتید نمره بده</p>
        </span>
      </div>
      <Search placeholder="دنبال کدوم استاد می گردی ؟" />
      <nav className={classes.navbar}>
        <Button buttonAction={loginModal.open}>
          ورود <i className="fa fa-user" aria-hidden="true"></i>
        </Button>
        <a className={mainClasses["hand-cursor"]}> دانشکده ها </a>
        <a className={mainClasses["hand-cursor"]}> تماس با ما </a>
        <a className={mainClasses["hand-cursor"]}>ثبت نام</a>
      </nav>
      <Login {...loginModal} />
      <SignUp {...signUpModal} />
    </header>
  );
};
export default NavBar;
