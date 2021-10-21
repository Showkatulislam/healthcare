import React from 'react';
import Banner from './Banner';
import Doctors from './Doctors';
import Section1 from './Section1';
import Section2 from './Section2';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Section1></Section1>
            <Section2></Section2>
            <Doctors></Doctors>
        </div>
    );
};

export default Home;