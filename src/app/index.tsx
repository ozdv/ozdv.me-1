import React from "react";
import AppRouter from "./AppRouter";
import Navbar from "../components/Navbar";

require("../index.css");

export default function App() {
  return (
    <div className="Root h-screen">
      <Navbar />
      <div className="h-16 bg-neutral-200" />
      <div className="AppContainer h-[calc(100vh-64px)] pt-4 px-4 md:px-6 bg-neutral-200 overflow-hidden">
        <AppRouter />
      </div>
    </div>
  );
}
