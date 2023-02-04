import classes from "./PreviousComments.module.css";
import classnames from "classnames";
// import { useContext } from "react";
// import LoginContext from "../../../../../../../../store/login-context";

const PreviousComments = ({ comment }) => {
  // const loginCtx = useContext(LoginContext);

  return (
    <>
      <div className={classnames(classes.comment)}>
        <div className={classnames(classes["comment-title"])}>
          <p className={classnames(classes.author)}>: ناشناس میگه </p>
          {/*{(loginCtx.isLoggedIn &&*/}
          {/*<p*/}
          {/*  className={classnames(classes.answer, commonClasses["hand-cursor"])}*/}
          {/*>*/}
          {/*  پاسخ*/}
          {/*</p>)}*/}
        </div>
        <p className={classnames(classes["comment-text"])}>{comment.text}</p>
      </div>
    </>
  );
};

export default PreviousComments;
