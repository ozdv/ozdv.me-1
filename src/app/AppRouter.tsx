import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ICatholic from "./iCatholic";
import OpenGames from "./OpenGames";
import ErrorPage from "./ErrorPage";

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/icatholic" element={<ICatholic />} />
        <Route path="/opengames" element={<OpenGames />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}
