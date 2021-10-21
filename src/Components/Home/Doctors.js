import React from 'react';
import Doctor from './Doctor';
import './Style/doctors.css'
import useData from '../../Hooks/useData'
const Doctors = () => {
    const [doctors]=useData()
    return (
        <div className="doctors text-primary">
            <h1>Meet Our Doctor</h1>
            <div className="doctor-container">
            {
                doctors.map(doctor=><Doctor key={doctor.name} doctor={doctor}></Doctor>)
            }
            </div>
        </div>
    );
};

export default Doctors;