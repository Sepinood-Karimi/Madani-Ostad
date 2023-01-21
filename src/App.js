import "./App.css";
import NavBar from "./Components/Header/NavBar";
import Main from "./Components/MainPage/Main/Main";
import Faculties from "./Components/MainPage/Faculties/Faculties";
import ContactUs from "./Components/MainPage/Contact-us/ContactUs";
import "../src/font-awesome/css/font-awesome.min.css";
import { useContext } from "react";
import Login from "./Components/Login/Login";
import ModalContext from "./store/modal-context";

function App() {
  const modalCtx = useContext(ModalContext);

  return (
    <>
      {modalCtx && <Login />}
      <NavBar />
      <Main />
      <Faculties />
      <ContactUs />
    </>
  );
}

export default App;
