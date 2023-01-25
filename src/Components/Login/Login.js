import Modal from "../UI/Modal/Modal";
import Input from "../UI/Input/Input";
import classes from "./Login.module.css";
import classnames from "classnames";
import Form from "../UI/Form/Form";
import commonClasses from "../UI/Common/common.module.css";

const Login = ({ isOpen, close, openSignUpModal }) => {
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
      >
        <Input
          id="email"
          labelText="پست الکترونیکی"
          type="email"
          className={classnames(classes["login-input"])}
        />
        <Input
          id="password"
          labelText="کلمه عبور"
          type="password"
          className={classnames(classes["login-input"])}
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
