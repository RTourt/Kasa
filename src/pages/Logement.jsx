import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../datas/logements.json';
import Tag from "../components/Tag/Tag";
import Rate from '../components/Rate/Rate';
import Slideshow from '../components/Slideshow/Slideshow';
import { Dropdown, DropdownEquipments } from '../components/Collapse/Collapse';
import "./Logement.css";

// fonction qui permet de récupérer les données d'un logement à partir de son ID dans la base de données (logements.json), et de stocker ces données.
function Logement() {
  // useParams permet d'extraire l'ID de l'URL
  const { id } = useParams();
  // useState a un objet vide à l'état initial
  const [logement, setLogement] = useState({});

  // useEffect recherche le logement correspondant dans la base de données à chaque fois que l'ID du logement change. 
  // donc recherche le logement dans data avec l'id et on met à jour l'état de logement avec le logement trouvé en utilisant setLogement. 
  // le deuxième argument [id] indique que la fonction doit êtr eexecutée chaque fois que l'id change
  useEffect(() => {
    const foundLogement = data.find((logement) => logement.id === id);
    setLogement(foundLogement);
  }, [id]);


  return (
    // affichage de la carte du logement
    <article className="container-card">
      {/* affichage du slideshow (carrousel)  */}
      {logement.pictures && <Slideshow images={logement.pictures} />}
      <div className='container-wrapper'>
        {/* affichage des infos du logement*/}
        <div className='container-info'>
          <h2>{logement.title}</h2>
          <p className='container-location'>{logement.location}</p>
          <div className='container-tags'>
            {/* pour afficher la liste de tags, map va parcourir cette liste et créer un élément Tag pour chaque élément dans la liste en lui passant la propriété tag.
            Et key est utiliser pour aider React à identifier chaque élément de la liste*/}
            {logement.tags && logement.tags.map((tag) => (
              <Tag key={tag} tag={tag} />
            ))}
          </div>
        </div>
        {/* affichage des infos sur l'hote */}
        <div className='container-host-rate'>
          <div className='container-host'>
            <p>{logement.host?.name}</p>
            <img src={logement.host?.picture} alt={logement.title} />
          </div>
          {/* affichage des notes (étoiles) */}
          <Rate rating={logement.rating} />
        </div>
      </div>
      {/* affichage des menus déroulants (description + équipements) */}
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


