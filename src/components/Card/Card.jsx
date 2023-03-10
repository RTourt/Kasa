import React from 'react'
import "./Card.css"
import { Link } from 'react-router-dom';

function Card(props) {
  return (
    <article className="card">
      <Link to={"/logement/" + props.id}>
        <img src={props.cover} alt={props.title} />
        <h2>{props.title}</h2></Link>
    </article>
  );
}

export default Card