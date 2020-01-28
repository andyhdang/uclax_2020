//useState and useEffect is part of React App
import React, { useState, useEffect } from 'react'
import './Nav.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Nav = () => {

    //showMenu and updateShowMenu are made up names
    //state variables 
    const [showMenu, updateShowMenu] = useState (true);
    const [isSmall, updateIsSmall] = useState(true);

    //Functions / Methods
    //Hamburger Click
    const handleHamburgerClick = () => {
        console.log ('You hit the hamburger');

        let newShowMenu;

        if (showMenu === true) {
            newShowMenu = false;
        } else {
            newShowMenu = true;
        }

        updateShowMenu(newShowMenu);

    }
    
    // Checking for Small view or Medium/Large
    const handleIsSmall = () => {
        console.log('How Wide Window: ', window.innerWidth, isSmall);

        if (window.innerWidth > 599) {
            updateIsSmall(false); //not small
            updateShowMenu(true); //show menu
        } else {
            updateIsSmall(true); //is small
            updateShowMenu(false); //hide menu
        }

    }

    //useEffect so it doesnt keep reassigning the listener
    useEffect(()=> {
        window.addEventListener('resize', handleIsSmall);
        handleIsSmall(); //fires off when page first loads
    }, []);
   

    return (

        //JSX
        <nav className='Nav'>

            {
                isSmall &&
                // <button onClick={ handleIsSmall }>Clickme</button>
                <div className="hamburger" onClick = {handleHamburgerClick}> 
                    <FontAwesomeIcon icon ={faBars}></FontAwesomeIcon>
                </div>

            }

            {
             //"if showMenu is true" show below
                showMenu &&

                <div className="links">
                
                    <a href="#">Welcome</a> 
                    <a href="#">Services</a>
                    <a href="#">Contact</a>

                </div>

            }


        </nav>
    );

}

export default Nav;