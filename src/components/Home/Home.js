import React from 'react';
import Calculation from '../Calculation/Calculation';
import Card from '../Card/Card';
import './Home.css';

const Home = () => {
    return (
        <div className='activity-container'>
            <div>
                <Card></Card>
            </div>
            <div>
                <Calculation></Calculation>
            </div>
        </div>
    );
};

export default Home;