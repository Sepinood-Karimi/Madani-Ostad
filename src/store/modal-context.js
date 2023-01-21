import React from "react";

const defaultModalState = {
  modal: false,
  openModal: () => {},
  closeModal: () => {},
};

const ModalContext = React.createContext(defaultModalState);

export default ModalContext;
