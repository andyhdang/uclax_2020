import React, { useState, useEffect } from 'react';
import './Staff.scss';
// import { staffMembers } from './staff.js';
import API from '../../../common/API.js';

const StaffMembers = () => {

    //1. set up state to keep track of data from server
    const [staffMembers, setStaffMembers] = useState([]);

    //Only do this on mount.
    useEffect(() => {
        //2. retreive the data from the server
        API.get('staff').then((result) => {
            //3. update staffMembers with data from server
            console.log('Staff Response', result);
            setStaffMembers(result.data);
        });
        
    }, []);
   

    return staffMembers.map((staffMember, idx) => {
        return (
            <div key={ idx } className= "StaffMember">
                <img src= { staffMember.image } alt={ staffMember.name }/>
                <h3> { staffMember.name }</h3>
            </div>
        );
    });
}

const Staff = () => {
    return (
        <div className="Pages Staff">
            Staff Goes Here.

            <div className="container">

                <StaffMembers />
            </div>
            
        </div>
    )
}

export default Staff;