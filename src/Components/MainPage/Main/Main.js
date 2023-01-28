import Button from "../../UI/Button/Button/Button";
import classes from "./Main.module.css";
import MainPageSVG from "../../../SVG/MainPageSVG";
import useBooleanState from "../../../Hooks/use-BooleanState";
import SignUp from "../../SignUp/SignUp";
import Login from "../../Login/Login";
import { useContext } from "react";
import LoginContext from "../../../store/login-context";

const Main = () => {
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
  return (
    <div className={classes["main-container"]}>
      <main className={classes.main}>
        <h1>!این بار تو به اساتید نمره بده</h1>
        <p>
          ما چند نفر از دانشجو های رشته کامپیوتر اومدیم این سایتو ساختیم تا
          دانشجو ها بتونن راجب
        </p>
        <p>
          اساتید نظر بدن و به ویژگی های مختلفشون نمره بدن ، تا بقیه دانشجو ها
          موقع انتخاب واحد به
        </p>
        <p>راحتی بتونن استاد مورد نظرشونو انتخاب کنن</p>
        <div className={classes.buttons}>
          <Button className={classes["uni-button"]}>
            <a href="/#faculties">دانشکده ها</a>
            <i className="fa fa-university" aria-hidden="true"></i>
          </Button>
          {!loginCtx.isLoggedIn && (
            <Button buttonAction={signUpModal.open}>
              ثبت نام کنید <i className="fa fa-user" aria-hidden="true"></i>
            </Button>
          )}
        </div>
      </main>
      <aside className={classes.aside}>
        <MainPageSVG />
      </aside>
      {!loginCtx.isLoggedIn && (
        <>
          <Login {...loginModal} openSignUpModal={openSignUpModal} />
          <SignUp {...signUpModal} openLoginModal={openLoginModal} />
        </>
      )}
    </div>
  );
};

export default Main;
