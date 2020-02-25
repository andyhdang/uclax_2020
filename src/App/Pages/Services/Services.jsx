import React, { useState, useEffect } from 'react';
import '../Pages.scss';
import './Services.scss';
// import { theServices } from './services.js';
import API from '../../common/API.js';
import Service from './Service.jsx';


const TheServices = () => {

    const [ theServices, setTheServices] = useState([]);

    useEffect (() => {
        API.get('services/gallery').then((result) => {
            console.log('Got Services', result);
            setTheServices(result.data);
        });

    }, []);

    return theServices.map((theServices, idx) => {
        return (
            <Service 
                key= { idx } 
                theServices={ theServices } 
            />
        );
    }

    );
}

const Services = () => {

    return (
        <div className="Pages Services">
            Services
            <div className="container">

                <TheServices /> 
            </div>
           
        </div>

    )
}
export default Services;