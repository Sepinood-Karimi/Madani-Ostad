import Modal from "../../../UI/Modal/Modal";
import Form from "../../../UI/Form/Form";
import Input from "../../../UI/Input/Input";
import classnames from "classnames";
import classes from "./New.module.css";
import Toastify from "toastify-js";
import { useContext, useRef } from "react";
import LoginContext from "../../../../store/login-context";

const NewTeacher = ({ isOpen, close, faculty }) => {
  const loginCtx = useContext(LoginContext);
  const newTeacherInputRef = useRef();
  const newTeacherRequest = async () => {
    loginCtx.setLoading(true);
    try {
      const response = await fetch("https://mo.akdev.ir/api/contact", {
        method: "POST",
        body: JSON.stringify({
          message: newTeacherInputRef.current.value,
          name: "#newProfessorName",
          phone: faculty.name,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        loginCtx.setLoading(false);
        Toastify({
          text: "پیشنهاد استاد با موفقیت ثبت شد",
          duration: 3000,
          gravity: "bottom",
          style: {
            background: "linear-gradient(to right,#68d391, #96c93d)",
          },
        }).showToast();
      } else {
        loginCtx.setLoading(false);
        throw new Error(data.error);
      }
    } catch (e) {
      Toastify({
        text: e.message,
        duration: 3000,
        gravity: "bottom",
        style: {
          background: "linear-gradient(to right,#fc8181, #fc8181)",
        },
      }).showToast();
    }
    close();
  };
  return (
    <>
      <Modal
        additionalModalClasses={classnames(classes["new-modal"])}
        isOpen={isOpen}
        closeModal={close}
      >
        <p className={classnames(classes["new-title"])}>پیشنهاد استاد جدید</p>
        <p className={classnames(classes["new-description"])}>
          لطفا استاد مورد نظر خود را از طریق فرم زیر معرفی کنین تا به دانشکده
        </p>
        <p className={classnames(classes["new-description-two"])}>
          {`${faculty.name} اضافه شود`}
        </p>
        <Form
          buttonText="ارسال پیشنهاد"
          long={true}
          className={classnames(classes["new-form"])}
          additionalClassNames={classnames(classes["new-button"])}
          buttonActions={newTeacherRequest}
        >
          <Input
            id="teacherName"
            labelText="نام  استاد"
            type="text"
            className={classnames(classes["new-input"])}
            ref={newTeacherInputRef}
          />
        </Form>
      </Modal>
    </>
  );
};
export default NewTeacher;
