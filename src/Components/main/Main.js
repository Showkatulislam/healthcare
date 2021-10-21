import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
import AuthProvider from '../../context/AuthProvider';
import Doctordetails from '../Details/Doctordetails';
import Doctors from '../Home/Doctors';

import Home from '../Home/Home';
import Login from '../Login/Login';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import Header from '../Sharespages/header/Header';
import Footer from '../footer/Footer'
import About from '../About/About'
import NotFound from '../NotFound/NotFound'
import BookAppointment from '../BookAppointment/BookAppointment';
const Main = () => {
    return (
        <div>
            <AuthProvider>
            <Router>
                <Header></Header>
                <Switch>
                    <Route exact path="/">
                        <Home></Home>
                    </Route>
                    <Route exact path="/home">
                        <Home></Home>
                    </Route>
                    <Route path="/doctor">
                       <Doctors></Doctors>
                    </Route>
                    <Route path="/doctordetails/:id">
                        <Doctordetails></Doctordetails>
                    </Route>
                    <Route path="/about">
                        <About></About>
                    </Route>
                    <PrivateRoute path="/bookappointment">
                        <BookAppointment></BookAppointment>
                    </PrivateRoute>
                    <Route path="/login">
                        <Login></Login>
                    </Route>
                    <Route path="*">
                        <NotFound></NotFound>
                    </Route>
                </Switch>
                <Footer></Footer>
            </Router>
            </AuthProvider>
        </div>
    );
};

export default Main;