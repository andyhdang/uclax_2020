import React, { useRef, useState } from 'react';
import './ContactForm.scss';
import { emailCheck } from '../../../common/utlities.js';
import classnames from 'classnames';
import keycode from 'keycode';
import API from '../../../common/API.js';


const ContactForm = () => {

    //state
    const [emailIsValid, updateEmailIsValid] = useState(true);
    const [formIsValid, updateFormIsValid] = useState(true);
    const [errors, updateErrorsArray] = useState([]);


    //Refs (reference) :: Giving React's virtual DOM access to the Physical DOM elements on the page
    const emailRef = useRef();
    const messageRef = useRef();

    const handleFormSubmit = () => {
        console.log('You Clicked Me');

        let errorMessages = [];

        //validate the user filled in the form
        if (emailRef.current.value.length < 4) {
            errorMessages.push({
                message: 'You forgot to fill out the Email field.',
            })
        }

        if (!emailCheck(emailRef.current.value)) {
            errorMessages.push({
                message: 'The Email you provided is invalid.',
            })
        }

        if (messageRef.current.value.length < 1) {
            errorMessages.push({
                message: 'You forgot to fill out the Message field.',
            })
        }

        updateErrorsArray(errorMessages); 

        //keep track of errors - and update the DOM with feedback is there is an error.
            if (errorMessages.length > 0) {
                updateFormIsValid(false);
            } else {
                updateFormIsValid(true);
               //if all is successful - we want to post the data 
               console.log('Posting the data')
               
               const postData ={
                   email: emailRef.current.value,
                   message: messageRef.current.value,
               }

               API.post('email/send', postData).then((results)=> {
                   console.log('Posting the data', results);
               });


            }
    }

    const validateEmail = () => {
        const emailValue = emailRef.current.value;
        console.log('Validating email', emailValue);

        if (emailValue.length > 3 && !emailCheck(emailValue)) {
            updateEmailIsValid(false);
        } else {
            updateEmailIsValid(true);
        }
    }

    const displayErrors = () => {
        return errors.map((error, idx) => {
            return (
                <li key= { idx } >{ error.message }</li>
            );

        })
    }

    // also used for drop down lists and popup menus
    const handleKeyDown = (event) => {
        switch (keycode(event)) {
            case 'space:':
            case 'enter':
                handleFormSubmit();
                break;
            default:
                return true;
        }
    }



    //const theClassName = (formIsValid) ? 'ContactForm form-valid': 'ContactForm form-invalid';

    const theClassName = classnames ({
        'ContactForm': true,
        'form-valid': formIsValid,
        'form-invalid': !formIsValid,
    });

    return (
        <div className= { theClassName }>

           { 
                (errors.length > 0) &&
                <div className="error-message">
                    ERROR MESSAGES GO HERE
                    <ul>
                        { displayErrors() }
                    </ul>
                </div>
            }

            <div className="form-group">
                <div className="left">
                    <label htmlFor="email">Email</label> 
                </div>
                <div className="right">
                    <input 
                        className= { emailIsValid ? '': 'invalid' }
                        ref={ emailRef } 
                        name="email" 
                        id="email" 
                        placeholder="email@onedomain.com"
                        onChange={ validateEmail }
                    />
                </div>
            </div>
            <div className="form-group">
                <div className="left">
                    <label htmlFor="message">Message</label>
                </div>
                <div className="right">
                    <textarea ref={ messageRef } name="message" id="message" placeholder="your message goes here">
                    </textarea>
                </div>  
            </div>
            <div className="form-group">
                <div className="left" />
                <div className="right">
                    <button
                        tab-index={ 0 }
                        onClick= { handleFormSubmit }
                        onKeyDown= { handleKeyDown }
                    >Send Email</button>
                </div>
            </div>
        </div>
    )
}

export default ContactForm;