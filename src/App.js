import React from "react";
import "./App.css";
import "../src/font-awesome/css/font-awesome.min.css";
import { Route, Routes } from "react-router";
import "toastify-js/src/toastify.css";
import { Suspense } from "react";
import LoadingPage from "./Pages/LoadingPage";
import NotFoundPage from "./Pages/NotFoundPage";
import {GTMProvider} from "@elgorditosalsero/react-gtm-hook";
const MainPage = React.lazy(() => import("./Pages/MainPage"));
const Teacher = React.lazy(() =>
  import("./Components/MainPage/Faculties/Faculty/Teachers/Teacher/Teacher")
);

function App() {
    const gtmParams = {
        id: 'GTM-MJNJ64CQ',
        dataLayerName: 'customDataLayerName'
    }
  return (
        <GTMProvider state={gtmParams}>
            <Suspense fallback={<LoadingPage />}>
                <Routes>
                    <Route path="*" element={<NotFoundPage />} />
                    <Route path="/" element={<MainPage />} />
                    <Route path="/professor/:id" element={<Teacher />} />
                </Routes>
            </Suspense>
        </GTMProvider>
  );
}

export default App;
