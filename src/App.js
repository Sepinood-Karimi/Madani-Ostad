import React from "react";
import "./App.css";
import "../src/font-awesome/css/font-awesome.min.css";
import { Route, Routes } from "react-router";
import "toastify-js/src/toastify.css";
import { Suspense } from "react";
import LoadingPage from "./Pages/LoadingPage";
const MainPage = React.lazy(() => import("./Pages/MainPage"));
const Teacher = React.lazy(() =>
  import("./Components/MainPage/Faculties/Faculty/Teachers/Teacher/Teacher")
);

function App() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/professor/:id" element={<Teacher />} />
      </Routes>
    </Suspense>
  );
}

export default App;
