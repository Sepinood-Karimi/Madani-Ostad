import Modal from "../../../UI/Modal/Modal";
import Form from "../../../UI/Form/Form";
import Input from "../../../UI/Input/Input";
import classnames from "classnames";
import classes from "./New.module.css";
import Toastify from "toastify-js";
import { useContext, useRef } from "react";
import LoginContext from "../../../../store/login-context";

const NewFaculty = ({ isOpen, close }) => {
  const loginCtx = useContext(LoginContext);
  const newFacultyInputRef = useRef();
  const newFacultyRequest = async () => {
    loginCtx.setLoading(true);
    try {
      const response = await fetch("https://mo.akdev.ir/api/contact", {
        method: "POST",
        body: JSON.stringify({
          message: newFacultyInputRef.current.value,
          name: "#newFacultyName",
          phone: "newFacultyName",
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        loginCtx.setLoading(false);
        Toastify({
          text: "پیشنهاد دانشکده شما به  ادمین ارسال شد",
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
        <p className={classnames(classes["new-title"])}>پیشنهاد دانشکده جدید</p>
        <p className={classnames(classes["new-description"])}>
          لطفا دانشکده مورد نظر خود را از طریق فرم زیر به ما پیشنهاد بدین تا به
        </p>
        <p className={classnames(classes["new-description-two"])}>
          لیست دانشکده ها اضافه کنیم
        </p>
        <Form
          buttonText="ارسال پیشنهاد"
          long={true}
          className={classnames(classes["new-form"])}
          additionalClassNames={classnames(classes["new-button"])}
          buttonActions={newFacultyRequest}
        >
          <Input
            id="facultyName"
            labelText="نام  دانشکده"
            type="text"
            className={classnames(classes["new-input"])}
            ref={newFacultyInputRef}
          />
        </Form>
      </Modal>
    </>
  );
};
export default NewFaculty;
