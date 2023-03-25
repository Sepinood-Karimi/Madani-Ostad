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
import Toastify from "toastify-js";
import classnames from "classnames";
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
    Toastify({
      text: "شما خارج شدید",
      duration: 3000,
      gravity: "bottom",
      style: {
        background: "linear-gradient(to right,#68d391, #96c93d)",
      },
    }).showToast();
    loginModal.close();
    signUpModal.close();
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
        <a className={mainClasses["hand-cursor"]} href="/#faculties">
          دانشکده ها
        </a>
        <a className={mainClasses["hand-cursor"]} href="/#contact-us">
          {" "}
          تماس با ما{" "}
        </a>
        {!loginCtx.isLoggedIn && (
          <a
            className={mainClasses["hand-cursor"]}
            onClick={() => signUpModal.open()}
          >
            ثبت نام
          </a>
        )}
      </nav>
      <div className={classnames(classes["hamburger-menu"])}>
        <input
          id="menu__toggle"
          className={classnames(classes["menu__toggle"])}
          type="checkbox"
        />
        <label
          className={classnames(classes["menu__btn"])}
          htmlFor="menu__toggle"
        >
          <span></span>
        </label>

        <ul className={classnames(classes["menu__box"])}>
          <li>
            <a className={mainClasses["hand-cursor"]} href="/#faculties">
              دانشکده ها
            </a>
          </li>
          <li>
            <a className={mainClasses["hand-cursor"]} href="/#contact-us">
              {" "}
              تماس با ما{" "}
            </a>
          </li>
          <li>
            {!loginCtx.isLoggedIn && (
              <a
                className={mainClasses["hand-cursor"]}
                onClick={() => signUpModal.open()}
              >
                ثبت نام
              </a>
            )}
          </li>
          <li>
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
          </li>
        </ul>
      </div>
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
