import React from 'react';
import './Style/section1.css'
const Section1 = () => {
    return (
        <div className="container1">
            <div className="div1">
                <div><i class="fas fa-phone"></i></div>
                <h2>Emergency Cases</h2>
                <p>Ut wisi enim ad minim veniam, quis laore nostrud exerci tation </p>
                <h1>1-800-400-7400</h1>
            </div>
            <div className="div2">
                <div><i class="far fa-calendar-alt"></i></div>
                <h2>Doctors TimeTable</h2>
                <p>Ut wisi enim ad minim veniam, quis laore nostrud exerci tation </p>
            </div>
            <div className="div3">
                <div><i class="far fa-clock"></i></div>
                <h2>Opening Hours</h2>
                <p>Monday-Friday</p>
                <hr />
                <p>Saturday</p>
                <hr />
                <p>sunday</p>
                <hr />
            </div>
            
        </div>
    );
};

export default Section1;