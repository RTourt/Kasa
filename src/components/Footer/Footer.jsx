import React from 'react'
import logo from "../../assets/logo-footer.png"
import "./Footer.css"

function Footer() {
  return (
    // affichage du footer avec le logo Kasa et un élément p pour le texte du copyright.
    <footer className='footer'>
      <div className='footer_logo'>
        <img src={logo} alt="Logo de l'agence Kasa" />
      </div>
      <p className='footer_txt'>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer

