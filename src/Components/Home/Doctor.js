import React from 'react';
import { Link } from 'react-router-dom';
import './Style/doctor.css'
const Doctor = ({doctor}) => {
    const {id,img,name,Degrees,specialty}=doctor
    return (
        <Link to={`/doctordetails/${id}`}><div className="doctor">
        <img src={img} alt="" />
        <div>
        <h3 className="dark">{name}</h3>
         <small>{specialty}</small>
         <p>{Degrees}</p>
        </div>
    </div></Link>
    );
};

export default Doctor;