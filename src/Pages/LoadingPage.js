import Modal from "../Components/UI/Modal/Modal";

const LoadingPage = ({ isOpen, close }) => {
  return (
    <Modal isOpen={isOpen} closeModal={close}>
      <p>لطفا صبر کنید</p>
      <p>در حال انتقال به صفحه ای دیگر</p>
    </Modal>
  );
};
export default LoadingPage;
