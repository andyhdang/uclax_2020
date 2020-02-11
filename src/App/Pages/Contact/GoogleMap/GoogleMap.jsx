import React from 'react';
import './GoogleMap.scss';

import GoogleMapReact from 'google-map-react';

const googleApiKey = 'AIzaSyBJptE3Te02Kozh8bqpBwaeA7hc3onQmBY';
const coords = {
    lat: 34.134617,
    lng: -118.019816,
}


const GoogleMap = () => {
    return (
        <div className="GoogleMap">
            GoogleMap

            <GoogleMapReact 
                bootstrapURLKeys={{ key: googleApiKey }}
                defaultCenter={ coords }
                defaultZoom={ 14 }
                initialCenter
           />
                
                
            
        </div>
    )
}

export default GoogleMap;