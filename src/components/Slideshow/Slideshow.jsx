import React, { useState } from 'react';
import './Slideshow.css';
import left from '../../assets/left-arrow.png'
import right from '../../assets/right-arrow.png'

// fonction utilisé dans le carrousel se trouvant sur la page Logement 
function Slideshow(props) {
    //useState pour stocké l'index de l'image affichée, la première image est affichée par default car l'index initial à 0.
    const [currentSlide, setCurrentSlide] = useState(0);
    const pictures = props.images;
    // vérifie si la liste pictures contient plus d'une image
    const showButtons = pictures.length > 1;

    //fonction pour gérer le passage à l'image suivante
    function handleNextSlide() {
        //calcule de l'indice de l'image suivante en utilisant l'opérateur modulo et la longueur de la liste pictures
        //celà permet de passer à la 1ère image si la dernière image est actuellement affichée et de boucler sur les images.
        const nextSlide = (currentSlide + 1) % pictures.length;
        setCurrentSlide(nextSlide);
    }

    //fonction pour gérer le passage à l'image précédente
    //si l'index actuel de l'image est = 0, celà signifie que l'utilisateur est actuellement sur la première image de la série
    //et donc que l'image précédente doit être la dernière image de la série. 
    //sinon si l'index actuel de l'image n'est pas égal à zéro alors l'image précédente doit être l'image qui précède l'image actuelle.
    function handlePreviousSlide() {
        const previousSlide = currentSlide === 0 ? pictures.length - 1 : currentSlide - 1;
        setCurrentSlide(previousSlide);
    }


    return (
        <div className="container-slideshow" style={{ backgroundImage: `url(${pictures[currentSlide]})` }}>
            {showButtons && ( // condition pour afficher ou masquer les boutons de diaporama
                <div className="slideshow-button-wrapper">
                    <button className="slideshow-button" onClick={handlePreviousSlide}>
                        <img src={left} alt="previous" />
                    </button>
                    <button className="slideshow-button" onClick={handleNextSlide}>
                        <img src={right} alt="next" />
                    </button>
                    <p className="current-slide">{currentSlide + 1}/{pictures.length}</p>
                </div>
            )}
        </div>
    );


}

export default Slideshow;