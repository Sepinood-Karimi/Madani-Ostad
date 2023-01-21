import ModalContext from "./modal-context";
import { useState } from "react";

const ModalProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const openModalHandler = () => {
    setShowModal(true);
  };
  const closeModalHandler = () => {
    setShowModal(false);
  };

  const modalValue = {
    modal: showModal,
    openModal: openModalHandler,
    closeModal: closeModalHandler,
  };
  return (
    <ModalContext.Provider value={modalValue}>{children}</ModalContext.Provider>
  );
};

export default ModalProvider;
