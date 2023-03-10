import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="header_logo">
        <img src={logo} alt="Logo de l'agence Kasa" />
      </div>
      <nav className="navbar">
        <Link to="/"><a href="/">Accueil</a></Link>
        <Link to="about"><a href="about">A Propos</a></Link>
      </nav>
    </header>
  );
}

export default Header;
