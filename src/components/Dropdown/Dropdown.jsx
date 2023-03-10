import React, { useState } from 'react';
import './Dropdown.css';

function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleDropdown() {
        setIsOpen(!isOpen);
    }

    return (
        <div className="dropdown-description">
            <button onClick={toggleDropdown}>Description</button>
            {isOpen && <p>{props.children}</p>}
        </div >
    );
}

function DropdownEquipments(props) {
    const [dropdownOpen, setDropdownOpen] = useState(false);

    function toggleDropdown() {
        setDropdownOpen(!dropdownOpen);
    }

    return (
        <div className="dropdown-equipments">
            <button onClick={toggleDropdown}>Equipements</button>
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

export { Dropdown, DropdownEquipments };
