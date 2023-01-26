import Modal from "../UI/Modal/Modal";
import Input from "../UI/Input/Input";
import classes from "./Login.module.css";
import classnames from "classnames";
import Form from "../UI/Form/Form";
import commonClasses from "../UI/Common/common.module.css";
import { useContext, useRef } from "react";
import LoginContext from "../../store/login-context";

const Login = ({ isOpen, close, openSignUpModal }) => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const loginCtx = useContext(LoginContext);

  const login = async () => {
    loginCtx.loading = true;
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
        loginCtx.login(data.access_token);
      }
    } catch (e) {}
    loginCtx.loading = false;
  };
  return (
    <Modal
      isOpen={isOpen}
      additionalModalClasses={classnames(classes["login-modal"])}
      closeModal={close}
    >
      <p className={classnames(classes["login-title"])}>ورود به سایت</p>
      <p className={classnames(classes["login-description"])}>
        با ورود به سایت میتونی به اساتید نمره بدی و کامنت بذاری
      </p>
      <Form
        buttonText="ورود"
        className={classnames(classes["login-form"])}
        long={true}
        additionalClassNames={classnames(classes["login-button"])}
        buttonActions={login}
      >
        <Input
          id="email"
          labelText="پست الکترونیکی"
          type="email"
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
        onClick={openSignUpModal}
      >
        ثبت نام
      </p>
    </Modal>
  );
};

export default Login;
