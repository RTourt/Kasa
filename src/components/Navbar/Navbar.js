import React from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar_logo">
        <img src={logo} alt="Logo Kasa" />
      </div>
      <a href="/">Accueil</a>
      <a href="about">A Propos</a>
    </nav>
  );
}

export default Navbar;
