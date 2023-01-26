import Button from "../UI/Button/Button/Button";
import Search from "../Search/Search";
import classes from "./NavBar.module.css";
import mainClasses from "../UI/Common/common.module.css";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import useBooleanState from "../../Hooks/use-BooleanState";
import { useContext } from "react";
import LoginContext from "../../store/login-context";
import RedButton from "../UI/Button/RedButton/RedButton";

const NavBar = () => {
  const loginCtx = useContext(LoginContext);
  const loginModal = useBooleanState();
  const signUpModal = useBooleanState();
  const openLoginModal = () => {
    signUpModal.close();
    loginModal.open();
  };
  const openSignUpModal = () => {
    loginModal.close();
    signUpModal.open();
  };

  const logout = () => {
    loginCtx.logout();
  };

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
        {!loginCtx.isLoggedIn && (
          <Button buttonAction={loginModal.open}>
            ورود <i className="fa fa-user" aria-hidden="true"></i>
          </Button>
        )}
        {loginCtx.isLoggedIn && (
          <RedButton buttonAction={logout}>
            خروج
            <i className="fa fa-power-off" aria-hidden="true"></i>
          </RedButton>
        )}
        <a className={mainClasses["hand-cursor"]}> دانشکده ها </a>
        <a className={mainClasses["hand-cursor"]}> تماس با ما </a>
        {!loginCtx.isLoggedIn && (
          <a
            className={mainClasses["hand-cursor"]}
            onClick={() => signUpModal.open()}
          >
            ثبت نام
          </a>
        )}
      </nav>
      {!loginCtx.isLoggedIn && (
        <>
          <Login {...loginModal} openSignUpModal={openSignUpModal} />
          <SignUp {...signUpModal} openLoginModal={openLoginModal} />
        </>
      )}
    </header>
  );
};
export default NavBar;
