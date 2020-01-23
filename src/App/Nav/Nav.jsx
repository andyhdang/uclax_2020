//useState is part of React App
import React, { useState } from 'react'
import './Nav.scss'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Nav = () => {

    //showMenu and updateShowMenu are made up names
    const [showMenu, updateShowMenu] = useState (true)

    const handleHamburgerClick = () => {
        console.log ('You hit the hamburger')

        let newShowMenu;

        if (showMenu === true) {
            newShowMenu = false;
        } else {
            newShowMenu = true;
        }

        updateShowMenu(newShowMenu)
        

    }
    return (

        //JSX
        <nav className={'Nav'}>
            
            <div className="hamburger" onClick = {handleHamburgerClick}> 

                <FontAwesomeIcon icon ={faBars}></FontAwesomeIcon>
                
            </div>
                
            {
            
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