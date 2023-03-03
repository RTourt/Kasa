import React from 'react'
import "./Card.css"


function Card(props) {
  return (
    <article className="card">
      <img src={props.cover} alt={props.title} />
      <h2>{props.title}</h2>  
    </article>
  );
}

export default Card