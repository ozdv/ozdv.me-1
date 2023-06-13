import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ICatholic from "./iCatholic";
import OpenGames from "./OpenGames";
import ErrorPage from "./ErrorPage";
import ProjectPage from "./Projects";
import ResumePage from "./Resume";
import AboutPage from "./About";
import PrivacyPolicy from "./Privacy";

export default function AppRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/icatholic" element={<ICatholic />} />
        <Route path="/opengames" element={<OpenGames />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/resume" element={<ResumePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
}
