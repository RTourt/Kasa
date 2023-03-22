import React from 'react'
import Banner from '../components/Banner/Banner'
import GridCards from "../components/GridCards/GridCards"
import "./Home.css"

function Home() {
  return (
    // Affichage de la bannière et la grille de cartes de logements.    
    <div className='main'>
      <Banner />
      <GridCards />
    </div>
  )
}

export default Home