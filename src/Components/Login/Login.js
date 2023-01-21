import Modal from "../UI/Modal/Modal";
import Input from "../UI/Input/Input";
import Button from "../UI/Button/Button";
import { useContext } from "react";
import ModalContext from "../../store/modal-context";

const Login = () => {
  const modalCtx = useContext(ModalContext);
  const closeLogin = () => {
    modalCtx.closeModal();
  };
  return (
    <Modal onClose={closeLogin}>
      <p>ورود به سایت</p>
      <p>با ورود به سایت میتونی به اساتید نمره بدی و کامنت بذاری</p>
      <Input id="email" labelText="پست الکترونیکی" type="email" />
      <Button>ورود</Button>
      <p>ثبت نام</p>
    </Modal>
  );
};

export default Login;
