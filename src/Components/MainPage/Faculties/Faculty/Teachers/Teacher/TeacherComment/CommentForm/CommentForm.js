import Form from "../../../../../../../UI/Form/Form";
import classes from "./CommentForm.module.css";
import classnames from "classnames";

const CommentForm = () => {
  return (
    <div className={classnames(classes["comment-form"])}>
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
    </div>
  );
};

export default CommentForm;
