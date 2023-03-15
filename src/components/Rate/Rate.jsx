import React from 'react';
import starImg from "../../assets/star.png"
import starImgGrey from "../../assets/star-grey.png"
import "./Rate.css"


function getStarImage({ rating }) {
    const stars = [1, 2, 3, 4, 5];

    //Pour chaque note dans le tableau stars, la fonction teste si rating est >= à note, 
    //si c'est ok, une étoile est affichée sinon une étoile grise s'affiche.

    return (
        <div className="container-rate">
            {stars.map((note) =>
                rating >= note ? (
                    <img key={note} className="star" src={starImg} alt="star" />
                ) : (
                    <img
                        key={note} className="star" src={starImgGrey} alt="gray star"
                    />
                )
            )}
        </div>
    );
}

export default getStarImage;