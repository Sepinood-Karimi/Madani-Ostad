import "./App.css";
import "../src/font-awesome/css/font-awesome.min.css";
import { Route, Routes } from "react-router";
import MainPage from "./Pages/MainPage";
import "toastify-js/src/toastify.css";
import Teacher from "./Components/MainPage/Faculties/Faculty/Teachers/Teacher/Teacher";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/professor/:id" element={<Teacher />} />
    </Routes>
  );
}

export default App;
