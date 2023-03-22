import React from 'react';
import bannerAbout from "../assets/banner_img-about.png";
import { Collapse } from '../components/Collapse/Collapse';
import aboutContent from "../datas/aboutContent.json";
import "./About.css";

function About() {
  return (
    <>
      {/* Affichage de la banière */}
      <div className="banner bannerAbout">
        <img src={bannerAbout} alt="banner about" />
      </div>
      {/* Affichage des menus déroulants */}
      <div className='dropdown-about'>
        {Object.entries(aboutContent).map(([key, value], index) => (
          <Collapse key={key} title={value.aboutTitle} description={value.aboutText} />
        ))}
      </div>
    </>
  )
}

export default About