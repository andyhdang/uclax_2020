import React, { useState } from 'react';
import Lightbox from '../../Lightbox/Lightbox.jsx';

const Service = (props) => {

    const [ showLightbox, setShowLightbox] = useState('false');

    const turnLightOn = () => {
        console.log('Turning ON');
        setShowLightbox('true');

    }
    
    const turnLightOff = () => {
        console.log('Turning OFF');
        setShowLightbox('false');
    }

    return (
        <div className="TheServices">
                <img 
                    onClick={ turnLightOn }
                    src= { props.theServices.image } 
                    alt= { props.theServices.title }
                />
                <h3> { props.theServices.title }</h3>
                <Lightbox 
                    show = { showLightbox }
                    turnLightOff= { turnLightOff } 
                    imageURL= { props.theServices.image }
                    imageAlt= { props.theServices.title }
                    
                />
        </div>
    )
}

export default Service;
