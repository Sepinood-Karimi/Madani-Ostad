import classes from "./ContactUs.module.css";
import ContactUsSVG from "../../../SVG/ContactUsSVG";
import Input from "../../UI/Input/Input";
import Form from "../../UI/Form/Form";
import { useContext, useRef } from "react";
import LoginContext from "../../../store/login-context";
import Toastify from "toastify-js";

const ContactUs = () => {
  const submitButtonText = (
    <>
      ارسال
      <i className="fa fa-paper-plane" aria-hidden="true" />
    </>
  );
  const loginCtx = useContext(LoginContext);
  const nameInputRef = useRef();
  const messageInputRef = useRef();
  const mobileInputRef = useRef();
  const contactUs = async () => {
    loginCtx.setLoading(true);
    try {
      const response = await fetch("https://mo.akdev.ir/api/contact", {
        method: "POST",
        body: JSON.stringify({
          message: messageInputRef.current.value,
          name: nameInputRef.current.value,
          phone: mobileInputRef.current.value,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      if (response.ok) {
        loginCtx.setLoading(false);
        Toastify({
          text: "پیام شما با موفقیت ثبت شد",
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
    messageInputRef.current.value = "";
    nameInputRef.current.value = "";
    mobileInputRef.current.value = "";
  };

  return (
    <section className={classes["contact-us"]} id="contact-us">
      <div className={classes["contact-us__subject"]}>
        <span className={classes["contact-us__icon"]}>
          <i className="fa fa-headphones fa-lg" aria-hidden="true"></i>
        </span>
        <div className={classes["contact-us__titles"]}>
          <h4 className={classes["contact-us__title"]}>ارتباط با ما </h4>
          <p className={classes["contact-us__description"]}>
            برای ارتباط با تیم پشتیبانی وبسایت ، از فرم زیر اقدام کنید . مرسی اه
          </p>
        </div>
      </div>
      <div className={classes["contact-us__form"]}>
        <Form buttonText={submitButtonText} buttonActions={contactUs}>
          <Input
            id="name"
            type="text"
            labelText=""
            placeHolder="نام شما"
            className={classes["contact-us__input"]}
            ref={nameInputRef}
          />
          <Input
            id="number"
            type="text"
            labelText=""
            placeHolder="شماره موبایل"
            className={classes["contact-us__input"]}
            ref={mobileInputRef}
          />
          <div>
            <label htmlFor="comment"></label>
            <textarea
              id="comment"
              name="comment"
              placeholder="هرچه می خواهد دل تنگت بگو"
              rows="7"
              cols="92"
              className={classes["contact-us__comment"]}
              ref={messageInputRef}
            ></textarea>
          </div>
        </Form>
        <ContactUsSVG />
      </div>
    </section>
  );
};

export default ContactUs;
