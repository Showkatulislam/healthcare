import React from 'react';
import useAuth from '../../context/useAuth';
import './BookAppoint.css'
const BookAppointment = () => {
    const {user}=useAuth()
    return (
        <div className="apo-container">
          <div className="form-handle">
          <h1>Book Appointment</h1>
              <form >
                  <input type="text" placeholder={user?.displayName}/>
                  <input type="text" placeholder="Your Full Name" />
                  <input type="text" placeholder="Phone" />
                  <input type="date" placeholder="Date" />
                  <input type="time" placeholder="Time" />
                  <input type="button" value="Book Appointment" />
              </form>
          </div>
            
        </div>
    );
};

export default BookAppointment;