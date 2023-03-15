import React from 'react'
import "../components/Banner/Banner.css"
import '../components/Collapse/Collapse.css';
import bannerAbout from "../assets/banner_img-about.png"
import { DropdownAbout } from '../components/Collapse/Collapse'


function About() {
  return (
    <div>
      {/* Affichage de la banière */}
      <div className="banner">
        <img src={bannerAbout} alt="banner about" />
      </div>
      {/* Affichage des menus déroulants */}
      <DropdownAbout />
    </div>
  )
}

export default About