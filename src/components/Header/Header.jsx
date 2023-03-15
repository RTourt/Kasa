import React from "react";
import "./Header.css";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    // affichage du header avec le logo Kasa et un élément nav contenant 2 liens créés à l'aide de Link.
    <header className="header">
      <div className="header_logo">
        <img src={logo} alt="Logo de l'agence Kasa" />
      </div>
      <nav className="navbar">
        <Link to="/">Accueil</Link>
        <Link to="about">A Propos</Link>
      </nav>
    </header>
  );
}

export default Header;
