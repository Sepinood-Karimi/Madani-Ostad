import Modal from "../../../UI/Modal/Modal";
import Form from "../../../UI/Form/Form";
import Input from "../../../UI/Input/Input";
import classnames from "classnames";
import classes from "./New.module.css";

const NewTeacher = ({ isOpen, close }) => {
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
          فناوری اطلاعات اضافه شود
        </p>
        <Form
          buttonText="ارسال پیشنهاد"
          long={true}
          className={classnames(classes["new-form"])}
          additionalClassNames={classnames(classes["new-button"])}
        >
          <Input
            id="teacherName"
            labelText="نام  استاد"
            type="text"
            className={classnames(classes["new-input"])}
          />
        </Form>
      </Modal>
    </>
  );
};
export default NewTeacher;
