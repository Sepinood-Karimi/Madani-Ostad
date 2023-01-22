import Modal from "../../../UI/Modal/Modal";
import Form from "../../../UI/Form/Form";
import Input from "../../../UI/Input/Input";
import classnames from "classnames";
import classes from "./New.module.css";

const NewFaculty = () => {
  return (
    <>
      <Modal additionalModalClasses={classnames(classes["new-modal"])}>
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
        >
          <Input
            id="facultyName"
            labelText="نام  دانشکده"
            type="text"
            className={classnames(classes["new-input"])}
          />
        </Form>
      </Modal>
    </>
  );
};
export default NewFaculty;
