import classes from "./PreviousComments.module.css";
import classnames from "classnames";
import commonClasses from "../../../../../../../UI/Common/common.module.css";
const PreviousComments = ({ comment }) => {
  return (
    <>
      <div className={classnames(classes.comment)}>
        <div className={classnames(classes["comment-title"])}>
          <p className={classnames(classes.author)}>: ناشناس میگه </p>
          <p
            className={classnames(classes.answer, commonClasses["hand-cursor"])}
          >
            پاسخ
          </p>
        </div>
        <p className={classnames(classes["comment-text"])}>{comment.text}</p>
      </div>
    </>
  );
};

export default PreviousComments;
