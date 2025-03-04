import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import HRDashboardPage from "./pages/HrDashboard";
import './index.css';
import HRTestCreation from "./pages/HRTestCreation";
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup/recruiter" element={<HRDashboardPage />} />
        <Route path="/createTest" element={<HRTestCreation />} />
        
      </Routes>
    </Router>
  );
};

export default App;
