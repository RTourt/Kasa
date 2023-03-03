import React from 'react'
import Banner from '../components/Banner/Banner'
import GridCards from "../components/GridCards/GridCards"
import "../style/Main.css"

function Home() {
  return (
    <div className='main'>      
    <Banner/>    
    <GridCards/>   
    </div>
  )
}

export default Home