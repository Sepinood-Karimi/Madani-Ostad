import "./App.css";
import "../src/font-awesome/css/font-awesome.min.css";
import { Route, Routes } from "react-router";
import MainPage from "./Pages/MainPage";
import "toastify-js/src/toastify.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
