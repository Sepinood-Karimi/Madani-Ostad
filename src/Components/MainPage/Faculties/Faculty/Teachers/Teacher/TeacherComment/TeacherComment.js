import PreviousComments from "./PreviousComments/PreviousComments";
import CommentForm from "./CommentForm/CommentForm";
import classnames from "classnames";
import classes from "./TeacherComments.module.css";

const TeacherComment = () => {
  return (
    <div className={classnames(classes.comments)}>
      <div className={classnames(classes["comments-titles"])}>
        <p className={classnames(classes["comments-title"])}>| نظرات کاربران</p>
        <p className={classnames(classes["comments-count"])}> 0 </p>
        <p>نظر</p>
      </div>
      <PreviousComments />
      <CommentForm />
    </div>
  );
};
export default TeacherComment;
