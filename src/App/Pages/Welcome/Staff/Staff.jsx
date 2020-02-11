import React from 'react';
import './Staff.scss';
import { staffMembers } from './staff.js';

const StaffMembers = () => {
    return staffMembers.map((staffMember, idx) => {
        return (
            <div key={ idx } className= "StaffMember">
                <img src= { staffMember.img } alt={ staffMember.name }/>
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