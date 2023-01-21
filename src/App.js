import "./App.css";
import NavBar from "./Components/Header/NavBar";
import Main from "./Components/MainPage/Main/Main";
import Faculties from "./Components/MainPage/Faculties/Faculties";
import ContactUs from "./Components/MainPage/Contact-us/ContactUs";
import "../src/font-awesome/css/font-awesome.min.css";
import Modal from "./Components/UI/Modal/Modal";
import { useState } from "react";

function App() {
  const [modal, setModal] = useState(false);
  const showLoginModal = () => {
    setModal(true);
  };
  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      {modal && <Modal onClose={closeModal}>this is just test</Modal>}
      <NavBar onShowLogin={showLoginModal} />
      <Main />
      <Faculties />
      <ContactUs />
    </>
  );
}

export default App;
