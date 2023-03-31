import React from 'react';
import doctor from "../cardimages/doctor.svg"
import "./Doctor.css"

const Doctor = () => {
    return (
        <div className='doctor-border'>
            <img src={doctor} alt='doctor' className='doctor'></img>
        </div>
    );
}

export default Doctor;
