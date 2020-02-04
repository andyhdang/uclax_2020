import React from 'react';
import '../Pages.scss';
import './Services.scss';
import { theServices } from './services.js'

const TheServices = () => {
    return theServices.map((theServices, idx) => {
        return (
            <div key= { idx } className="TheServices">
                <img src= { theServices.img } alt= { theServices.title }/>
                <h3> { theServices.title }</h3>
            </div>
        )
    }

    )

}

const Services = () => {

    return (
        <div className="Pages Services">
            Services
            <TheServices />
        </div>

    )
}
export default Services;