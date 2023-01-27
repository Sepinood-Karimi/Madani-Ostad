import NavBar from "../../../../../Header/NavBar";
import TeacherInfo from "./TeacherInfo/TeacherInfo";
import TeacherComment from "./TeacherComment/TeacherComment";
import Messages from "../../../../../UI/Messages/Messages";

const Teacher = () => {
  return (
    <>
      <NavBar />
      <TeacherInfo />
      <TeacherComment />
      <Messages message="شما با موفقیت وارد شدید" />
    </>
  );
};

export default Teacher;
