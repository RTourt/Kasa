import React from 'react'
import { Link } from 'react-router-dom'
import "./Error.css"

function Error() {
  return (
    // Affichage de la page Erreur 404, un titre, un message et un lien de retour avec le composant Link pour naviguer vers la page d'accueil.
    <div className='error'>
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/"><a href="/">Retourner sur la page d'accueil</a></Link>
    </div>
  )
}

export default Error