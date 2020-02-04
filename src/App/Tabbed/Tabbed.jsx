import React, { useState } from 'react';
import './Tabbed.scss';

const tableItems = [
    {
        img: '/img/MissionVision/about.jpg',
        title: 'About',
        text: 'This is the About text content.',
    },
    {
        img: '/img/MissionVision/mission.jpg',
        title: 'Mission',
        text: 'This is the Mission text content.',
    },
    {
        img: '/img/MissionVision/vision.jpg',
        title: 'Vision',
        text: 'This is the Vision text content.',
    },


];

const Tabbed = () => {

    const [currentTab, setCurrentTab] = useState (tableItems[0]);

    const isAbout = (currentTab.title === 'About') ? 'tab active': 'tab';
    const isMission = (currentTab.title === 'Mission') ? 'tab active': 'tab';
    const isVision = (currentTab.title === 'Vision') ? 'tab active': 'tab';


    return (
        <div className={ 'Tabbed' }>
            <div className="tabs">
                <div onClick={ () => {setCurrentTab(tableItems[0] ) } } className= { isAbout }>About</div>
                <div onClick={ () => {setCurrentTab(tableItems[1] ) } } className= { isMission }>Mission</div>
                <div onClick={ () => {setCurrentTab(tableItems[2] ) } } className= { isVision }>Vision</div>
            </div>

            <div className="content">
                <img src={currentTab.img}/>
                <h2>{currentTab.title}</h2>
                <p>{currentTab.text}</p>
            </div>

        </div>
    )
}

export default Tabbed;