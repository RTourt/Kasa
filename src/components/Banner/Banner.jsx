import React from "react";
import "./Banner.css";
import bannerImg from "../../assets/banner_img.png";

function Banner() {
  const title = "Chez vous, partout et ailleurs"
  return (
    // création de la bannière contenant un élément img et un h1 stocké dans la variable title.
    <div className="banner">
      <img src={bannerImg} alt="banner" />
      <h1>{title}</h1>
    </div>
  );
}

export default Banner;
