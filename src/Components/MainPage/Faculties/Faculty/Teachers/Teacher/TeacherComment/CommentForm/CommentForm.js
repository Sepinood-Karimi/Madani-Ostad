import Form from "../../../../../../../UI/Form/Form";
import classes from "./CommentForm.module.css";
import classnames from "classnames";
import { useContext } from "react";
import LoginContext from "../../../../../../../../store/login-context";
import useBooleanState from "../../../../../../../../Hooks/use-BooleanState";
import Login from "../../../../../../../Login/Login";
import SignUp from "../../../../../../../SignUp/SignUp";
import commonClasses from "../../../../../../../UI/Common/common.module.css";

const CommentForm = () => {
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
    <div className={classnames(classes["comment-form"])}>
      {!loginCtx.isLoggedIn && (
        <div className={classnames(classes.overlay)}>
          <p className={classnames(classes["overlay-text"])}>
            برای گذاشتن کامنت
          </p>
          <p
            className={classnames(classes.login, commonClasses["hand-cursor"])}
            onClick={() => loginModal.open()}
          >
            وارد شوید
          </p>
        </div>
      )}
      <Form
        buttonText="ارسال"
        additionalClassNames={classnames(classes["comment-button"])}
      >
        <label htmlFor="teacher-comment"></label>
        <textarea
          id="teacher-comment"
          name="teacher-comment"
          placeholder="نظر خود را بنویسید"
        ></textarea>
      </Form>
      {!loginCtx.isLoggedIn && (
        <>
          <Login {...loginModal} openSignUpModal={openSignUpModal} />
          <SignUp {...signUpModal} openLoginModal={openLoginModal} />
        </>
      )}
    </div>
  );
};

export default CommentForm;
