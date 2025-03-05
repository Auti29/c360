import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HrHome from "./pages/HrHome";
import UserAssessment from "./pages/UserAssessment";
import Assessment from "./pages/Assessment";
import HRTestCreation from "./pages/HRTestCreation";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<HrHome />} />
        <Route path="/userassessment" element={<UserAssessment />} />
        <Route path="/assessment" element={<Assessment />} />
        <Route path="/testcreation" element={<HRTestCreation />} />
      </Routes>
    </Router>
  );
};

export default App;
