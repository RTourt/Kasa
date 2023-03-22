import React, { useState } from 'react';
import './Collapse.css';
import top from "../../assets/top-arrow.png"
import bottom from "../../assets/bottom-arrow.png"

function Collapse(props) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }
    let content = null;
    if (props.title === "Équipments") {
        content = (
            <ul>
                {props.description && props.description.map((equipment) => (
                    <li key={equipment} value={equipment}>{equipment}</li>))}
            </ul>
        )
    } else {
        content = (
            <p>{props.description}</p>
        )
    }

    return (
        <div className="dropdown-description">
            <button onClick={toggleDropdown}>{props.title}<img src={isOpen ? top : bottom} alt={isOpen ? "top" : "bottom"} /></button>
            {/*Si isOpen est vrai, le contenu est affiché avec la description passée en tant qu'enfant au composant Dropdown.
                     Et si isOpen est faux, le contenu ne sera pas affiché. */}
            {isOpen && <span>{content}</span>}
        </div >
    );
}

export { Collapse };