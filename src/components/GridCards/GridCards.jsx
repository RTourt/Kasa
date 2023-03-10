import { useState } from 'react';
import Card from '../Card/Card'
import "./GridCards.css"
import data from '../../datas/logements.json';


function GridCards() {
  const [cardsData] = useState(data);
  return (
    <div className="gridCards">
      {cardsData.map(card => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}

export default GridCards
