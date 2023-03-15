import React, { useState } from 'react';
import './Collapse.css';
import top from "../../assets/top-arrow.png"
import bottom from "../../assets/bottom-arrow.png"
import aboutContent from "../../datas/aboutContent.json"

//fonction pour le menu déroulant Description de la page Logement 
function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="dropdown-description">
            <button onClick={toggleDropdown}>Description<img src={isOpen ? top : bottom} alt={isOpen ? "top" : "bottom"} /></button>
            {/*Si isOpen est vrai, p est affiché avec la description passée en tant qu'enfant au composant Dropdown. 
            Et si isOpen est faux, p ne sera pas affiché. */}
            {isOpen && <p>{props.children}</p>}
        </div >
    );
}

//fonction pour le menu déroulant Equipements de la page Logement 
function DropdownEquipments(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    function toggleDropdown() {
        setDropdownOpen(!dropdownOpen);
    }

    return (
        <div className="dropdown-equipments">
            <button onClick={toggleDropdown}>Equipements<img src={dropdownOpen ? top : bottom} alt={dropdownOpen ? "top" : "bottom"} /></button>
            {/*Si dropdownOpen est vrai, ul est affiché avec une liste li. 
            Les li sont créés à partir des éléments enfants passés au composant DropdownEquipments sous forme de tableau, 
            chaque li contient le nom d'équipement. Et si "dropdownOpen" est faux, ul ne sera pas affiché. */}
            {dropdownOpen && (
                <ul>
                    {props.children && props.children.map((equipment) => (
                        <li key={equipment} value={equipment}><span>{equipment}</span></li>
                    ))}
                </ul>
            )}
        </div>
    );
}

//fonction pour les menus déroulants de la page About 
function DropdownAbout() {
    //création d'un tableau d'états initiaux pour chacun des boutons avec la valeur false
    const [isOpen, setIsOpen] = useState(Object.entries(aboutContent).map(() => false));
    // La fonction est appelée lorsqu'un bouton est cliqué pour changer l'état de isOpen à l'index qui correspond
    function toggleDropdown(index) {
        setIsOpen(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    }

    return (
        <div className="dropdown-about-wrapper">
            {/* boucle map itère sur tous les éléments de aboutContent afin de créer un bouton pour chacun */}
            {Object.entries(aboutContent).map(([key, value], index) => (
                <div className="dropdown-about" key={key}>
                    <button onClick={() => toggleDropdown(index)}>
                        {value.aboutTitle}
                        {/* Affiche une image flèche haut ou bas en fonction de si le bouton est ouvert ou fermé */}
                        <img src={isOpen[index] ? top : bottom} alt={isOpen[index] ? "top" : "bottom"} />
                    </button>
                    {/* si isOpen à l'index correspondant est true alors le texte du bouton s'affiche */}
                    {isOpen[index] && <p>{value.aboutText}</p>}
                </div>
            ))}
        </div>
    );
}

export { Dropdown, DropdownEquipments, DropdownAbout };
