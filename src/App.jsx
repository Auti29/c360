import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>default page</div>} />
        <Route path="/home" element={<HomePage />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
