import React from "react";
import "./Banner.css";
import banner_img from "../../assets/banner_img.png";

function Banner() {
  return (
    <div className="banner">
      <img src={banner_img} alt="banner" />
      <h1>Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
