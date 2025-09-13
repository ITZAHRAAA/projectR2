// src/Navbar.js
import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    background: "#333",

    color: "white",
    padding: "15px 20px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    zIndex: 1000,
  };

  const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>
        🏠 Home
      </Link>
      <Link to="/cars" style={linkStyle}>
        📋 ListCars
      </Link>
      <Link to="/add" style={linkStyle}>
        ➕  addCar
      </Link>
      <Link to="/Edit" style={linkStyle}>
        EditCar
      </Link>
      <Link to="/reports" style={linkStyle}>
        📊 Reports
      </Link>
      <Link to="/history" style={linkStyle}>
        📜 History
      </Link>
    </nav>
  );
}

export default Navbar;
