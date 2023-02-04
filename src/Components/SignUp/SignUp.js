import Modal from "../UI/Modal/Modal";
import classnames from "classnames";
import classes from "../Login/Login.module.css";
import Form from "../UI/Form/Form";
import Input from "../UI/Input/Input";
import signUpClasses from "./SignUp.module.css";
import commonClasses from "../UI/Common/common.module.css";
import { useContext, useRef } from "react";
import LoginContext from "../../store/login-context";
import Toastify from "toastify-js";

const SignUp = ({ isOpen, close, openLoginModal }) => {
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const passwordInputRef = useRef();
  const studentIdInputRef = useRef();

  const loginCtx = useContext(LoginContext);
  const login = async () => {
    loginCtx.setLoading(true);
    try {
      const response = await fetch(
        "https://api.kodoomostad.rezakargar.ir/api/v1/users/authenticate",
        {
          method: "POST",
          body: JSON.stringify({
            grant_Type: "Password",
            username: emailInputRef.current.value,
            password: passwordInputRef.current.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        loginCtx.setLoading(false);
        loginCtx.login(data.access_token);
        Toastify({
          text: "شما با موفقیت وارد شدید",
          duration: 3000,
          gravity: "bottom",
          style: {
            background: "linear-gradient(to right,#68d391, #96c93d)",
          },
        }).showToast();
      } else {
        loginCtx.setLoading(false);
        loginCtx.error = data.errors;
        throw new Error(loginCtx.error);
      }
    } catch (e) {
      Toastify({
        text: e.message,
        duration: 3000,
        gravity: "bottom",
        style: {
          background: "linear-gradient(to right,#fc8181,#fc8181)",
        },
      }).showToast();
    }
    loginCtx.setLoading(false);
    close();
  };
  const signUp = async () => {
    loginCtx.setLoading(true);
    try {
      const response = await fetch(
        "https://api.kodoomostad.rezakargar.ir/api/v1/users",
        {
          method: "POST",
          body: JSON.stringify({
            email: emailInputRef.current.value,
            password: passwordInputRef.current.value,
            studentId: studentIdInputRef.current.value,
            name: nameInputRef.current.value,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        loginCtx.setLoading(false);
        login().then();
        Toastify({
          text: "اکانت شما با موفقیت ساخته شد",
          duration: 3000,
          gravity: "bottom",
          style: {
            background: "linear-gradient(to right,#68d391, #96c93d)",
          },
        }).showToast();
      } else {
        loginCtx.setLoading(false);
        loginCtx.error = data.errors;
        throw new Error(loginCtx.error);
      }
    } catch (e) {
      Toastify({
        text: e.message,
        duration: 3000,
        gravity: "bottom",
        style: {
          background: "linear-gradient(to right,#fc8181,#fc8181)",
        },
      }).showToast();
    }
  };
  return (
    <>
      <Modal
        additionalModalClasses={classnames(signUpClasses["signUp-modal"])}
        isOpen={isOpen}
        closeModal={close}
      >
        <p className={classnames(classes["login-title"])}>ثبت نام در سایت</p>
        <p className={classnames(classes["login-description"])}>
          برای بهره مندی از امکانات سایت، ثبت نام کنید
        </p>
        <Form
          buttonText="ثبت نام"
          className={classnames(classes["login-form"])}
          long={true}
          additionalClassNames={classnames(signUpClasses["signUp-button"])}
          buttonActions={signUp}
        >
          <Input
            id="fullName"
            labelText="نام و نام خانوادگی"
            type="text"
            className={classnames(classes["login-input"])}
            ref={nameInputRef}
          />
          <Input
            id="student-id"
            labelText="شماره دانشجویی"
            type="text"
            placeHolder="Example : 9718302104"
            className={classnames(classes["login-input"])}
            ref={studentIdInputRef}
          />
          <Input
            id="email"
            labelText="پست الکترونیکی"
            type="email"
            placeHolder="Example : your_email@gmail.com"
            className={classnames(classes["login-input"])}
            ref={emailInputRef}
          />
          <Input
            id="password"
            labelText="کلمه عبور"
            type="password"
            className={classnames(classes["login-input"])}
            ref={passwordInputRef}
          />
        </Form>
        <p
          className={classnames(
            classes["login-signup"],
            commonClasses["hand-cursor"]
          )}
          onClick={openLoginModal}
        >
          ورود
        </p>
      </Modal>
    </>
  );
};

export default SignUp;
