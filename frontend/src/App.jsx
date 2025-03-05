import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
<<<<<<< HEAD
import HrHome from "./pages/HrHome";
import UserAssessment from "./pages/UserAssessment";
import Assessment from "./pages/Assessment";
=======
import HRDashboardPage from "./pages/HrDashboard";
import './index.css';
import HRTestCreation from "./pages/HRTestCreation";
>>>>>>> 7d09945b9c630de4a82ac7dc4ca96807299c6255
import "./index.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
<<<<<<< HEAD
        <Route path="/dashboard" element={<HrHome />} />
        <Route path="/userassessment" element={<UserAssessment />} />
        <Route path="/assessment" element={<Assessment />} />
=======
        <Route path="/signup/recruiter" element={<HRDashboardPage />} />
        <Route path="/createTest" element={<HRTestCreation />} />
        
>>>>>>> 7d09945b9c630de4a82ac7dc4ca96807299c6255
      </Routes>
    </Router>
  );
};

export default App;
