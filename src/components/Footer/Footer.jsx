import React from 'react'
import "./Footer.css"
import logo from "../../assets/logo-footer.png"

function Footer() {
  return (
    <footer className='footer'>
<div className='footer_logo'>
  <img src={logo} alt="Logo de l'agence Kasa" />
</div>
<p className='footer_txt'>© 2020 Kasa. All rights reserved</p>
    </footer>   
  )
}


export default Footer

