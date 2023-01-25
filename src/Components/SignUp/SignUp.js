import Modal from "../UI/Modal/Modal";
import classnames from "classnames";
import classes from "../Login/Login.module.css";
import Form from "../UI/Form/Form";
import Input from "../UI/Input/Input";
import signUpClasses from "./SignUp.module.css";
import commonClasses from "../UI/Common/common.module.css";

const SignUp = ({ isOpen, close, openLoginModal }) => {
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
        >
          <Input
            id="fullName"
            labelText="نام و نام خانوادگی"
            type="text"
            className={classnames(classes["login-input"])}
          />
          <Input
            id="student-id"
            labelText="شماره دانشجویی"
            type="text"
            placeHolder="Example : 9718302104"
            className={classnames(classes["login-input"])}
          />
          <Input
            id="email"
            labelText="پست الکترونیکی"
            type="email"
            placeHolder="Example : your_email@gmail.com"
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
          onClick={openLoginModal}
        >
          ورود
        </p>
      </Modal>
    </>
  );
};

export default SignUp;
