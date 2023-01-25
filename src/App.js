import "./App.css";
import NavBar from "./Components/Header/NavBar";
import Main from "./Components/MainPage/Main/Main";
import Faculties from "./Components/MainPage/Faculties/Faculties";
import ContactUs from "./Components/MainPage/Contact-us/ContactUs";
import "../src/font-awesome/css/font-awesome.min.css";

function App() {
  return (
    <>
      <NavBar />
      <Main />
      <Faculties />
      <ContactUs />
    </>
  );
}

export default App;
