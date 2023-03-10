import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../datas/logements.json';
import "./Logement.css";
import Tag from "../components/Tag/Tag"
import star_img from "../assets/star.png"
import "../style/Rate.css"
import { Dropdown, DropdownEquipments } from '../components/Dropdown/Dropdown';


function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState({});


  useEffect(() => {
    const foundLogement = data.find((logement) => logement.id === id);
    setLogement(foundLogement);
  }, [id]);

  function getStarImage(rating) {
    const starImage = [];
    for (let i = 0; i < rating; i++) {
      starImage.push(<img src={star_img} alt="star" />);
    }
    return starImage;
  }





  return (
    <article className="container-card">
      <div className='container-banner'></div>
      <div className='container-wrapper'>
        <div className='container-info'>
          <h2>{logement.title}</h2>
          <p className='container-location'>{logement.location}</p>
          <div className='container-tags'>
            {logement.tags && logement.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
        <div className='container-host-rate'>
          <div className='container-host'>
            <p>{logement.host?.name}</p>
            <img src={logement.host?.picture} alt={logement.title} />
          </div>
          <div className='container-rate'>
            {logement.rating && getStarImage(logement.rating)}
          </div>
        </div>
      </div>
      <div className='dropdown-wrapper'>
        <Dropdown>{logement.description}</Dropdown>
        <DropdownEquipments>
          {logement.equipments && logement.equipments.map((equipment) => equipment)}
        </DropdownEquipments>
      </div>
    </article >
  )
}

export default Logement;


