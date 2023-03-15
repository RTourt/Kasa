import { useState } from 'react';
import Card from '../Card/Card'
import "./GridCards.css"
import data from '../../datas/logements.json';


function GridCards() {
  // utilisation de useState pour créer un état initial pour les données de cartes data
  const [cardsData] = useState(data);
  return (
    <div className="gridCards">
      {/* map parcourt chaque carte dans le tableau cardsData et renvoi un élément Card pour chaque carte. 
      Et key a une clé unique pour chaque carte pour gérer les changements d'état.*/}
      {cardsData.map(card => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}

export default GridCards
