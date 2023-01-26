import Modal from "../UI/Modal/Modal";
import classnames from "classnames";
import classes from "../Login/Login.module.css";
import Form from "../UI/Form/Form";
import Input from "../UI/Input/Input";
import signUpClasses from "./SignUp.module.css";
import commonClasses from "../UI/Common/common.module.css";
import { useContext, useRef } from "react";
import LoginContext from "../../store/login-context";

const SignUp = ({ isOpen, close, openLoginModal }) => {
  const emailInputRef = useRef();
  const nameInputRef = useRef();
  const passwordInputRef = useRef();
  const studentIdInputRef = useRef();

  const loginCtx = useContext(LoginContext);

  const signUp = async () => {
    loginCtx.loading = true;
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
        loginCtx.login(data.id);
        console.log(data.id);
      } else {
        loginCtx.loading = false;
        loginCtx.error = data.errors;
        console.log(loginCtx.error[0]);
      }
    } catch (e) {}
    loginCtx.loading = false;
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
