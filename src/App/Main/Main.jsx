import React from 'react';
import './Main.scss';
import { BrowserRouter as Router } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';

import Welcome from '../Pages/Welcome.jsx';
import Contact from '../Pages/Contact.jsx';
import Services from '../Pages/Services.jsx';

const Main = () => {
    return (
        <main className= {'Main'}>
            
            <Switch>
                
                <Route path ='/services'>
                    <Services />
                </Route>

                <Route path='/contact'>
                    <Contact />
                </Route>
                
                <Route path = '/'>
                    <Welcome />
                </Route>

            </Switch>
        
        </main>
    )
}

export default Main