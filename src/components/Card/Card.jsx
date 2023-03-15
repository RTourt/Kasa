import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    // Affichage de la carte du logement avec son image et son titre.
    // L'utilisateur sera redirigé vers la page du logement grâce à la composante Link. 
    <article className="card">
      <Link to={"/logement/" + props.id}>
        <img src={props.cover} alt={props.title} />
        <h2>{props.title}</h2></Link>
    </article>
  );
}

export default Card