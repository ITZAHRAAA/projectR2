import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import AddCar from "./pages/AddCar";
import EditCar from "./pages/EditCar";
import Reports from "./pages/Reports";
import History from "./pages/History";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ marginTop: "70px", padding: "20px" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cars" element={<Cars />} />
          <Route path="/add" element={<AddCar />} />
          <Route path="/edit/:id" element={<EditCar />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/history" element={<History />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
