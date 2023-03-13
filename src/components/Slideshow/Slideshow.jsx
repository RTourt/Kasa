import React, { useState } from 'react';
import './Slideshow.css';
import left from '../../assets/left-arrow.png'
import right from '../../assets/right-arrow.png'

function Slideshow(props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const pictures = props.images;

    function handleNextSlide() {
        const nextSlide = (currentSlide + 1) % pictures.length;
        setCurrentSlide(nextSlide);
    }

    function handlePreviousSlide() {
        const previousSlide = currentSlide === 0 ? pictures.length - 1 : currentSlide - 1;
        setCurrentSlide(previousSlide);
    }

    return (
        <div className="container-slideshow" style={{ backgroundImage: `url(${pictures[currentSlide]})` }}>
            <div className='slideshow-button-wrapper'>
                <button className="slideshow-button" onClick={handlePreviousSlide}><img src={left} alt="previous" /></button>
                <button className="slideshow-button" onClick={handleNextSlide}><img src={right} alt="next" /></button>
                <p className="current-slide">{currentSlide + 1}/{pictures.length}</p>
            </div>

        </div>
    );
}

export default Slideshow;