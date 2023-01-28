import Form from "../../../../../../../UI/Form/Form";
import classes from "./CommentForm.module.css";
import classnames from "classnames";
import { useContext, useRef } from "react";
import LoginContext from "../../../../../../../../store/login-context";
import useBooleanState from "../../../../../../../../Hooks/use-BooleanState";
import Login from "../../../../../../../Login/Login";
import SignUp from "../../../../../../../SignUp/SignUp";
import commonClasses from "../../../../../../../UI/Common/common.module.css";
import { useParams } from "react-router";
import Toastify from "toastify-js";

const CommentForm = () => {
  const commentRef = useRef();
  const loginCtx = useContext(LoginContext);
  const loginModal = useBooleanState();
  const signUpModal = useBooleanState();
  const params = useParams();

  const openLoginModal = () => {
    signUpModal.close();
    loginModal.open();
  };
  const openSignUpModal = () => {
    loginModal.close();
    signUpModal.open();
  };

  const sendComment = async () => {
    try {
      const response = await fetch(
        `https://api.kodoomostad.rezakargar.ir/api/v1/Professors/${params.id}/Comments`,
        {
          method: "POST",
          body: JSON.stringify({
            text: commentRef.current.value,
          }),
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${loginCtx.token}`,
          },
        }
      );
      const data = await response.json();
      if (response.ok) {
        Toastify({
          text: "کامنت شما با موفقیت ارسال شد",
          duration: 3000,
          gravity: "bottom",
          style: {
            background: "linear-gradient(to right,#68d391, #96c93d)",
          },
        }).showToast();
      } else {
        throw new Error(data.errors[0]);
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
    <div className={classnames(classes["comment-form"])}>
      {!loginCtx.isLoggedIn && (
        <div className={classnames(classes.overlay)}>
          <p className={classnames(classes["overlay-text"])}>
            برای گذاشتن کامنت
          </p>
          <p
            className={classnames(classes.login, commonClasses["hand-cursor"])}
            onClick={loginModal.open}
          >
            وارد شوید
          </p>
        </div>
      )}
      <Form
        buttonText="ارسال"
        additionalClassNames={classnames(classes["comment-button"])}
        buttonActions={sendComment}
      >
        <label htmlFor="teacher-comment"></label>
        <textarea
          id="teacher-comment"
          name="teacher-comment"
          placeholder="نظر خود را بنویسید"
          ref={commentRef}
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
