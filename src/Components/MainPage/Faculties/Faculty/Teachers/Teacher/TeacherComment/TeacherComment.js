import PreviousComments from "./PreviousComments/PreviousComments";
import CommentForm from "./CommentForm/CommentForm";
import classnames from "classnames";
import classes from "./TeacherComments.module.css";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
const TeacherComment = () => {
  const params = useParams();
  const [teacherComments, setTeacherComments] = useState([]);
  useEffect(() => {
    const getTeacherComments = async () => {
      const response = await fetch(
        `https://api.kodoomostad.rezakargar.ir/api/v1/Professors/${params.id}/Comments`
      );
      const data = await response.json();
      return data.data;
    };

    getTeacherComments().then((comments) => setTeacherComments(comments));
  }, []);

  return (
    <div className={classnames(classes.comments)}>
      <div className={classnames(classes["comments-titles"])}>
        <p className={classnames(classes["comments-title"])}>| نظرات کاربران</p>
        <p className={classnames(classes["comments-count"])}> 0 </p>
        <p>نظر</p>
      </div>
      {teacherComments.map((comment) => (
        <PreviousComments comment={comment} key={comment.id} />
      ))}
      <CommentForm />
    </div>
  );
};
export default TeacherComment;
