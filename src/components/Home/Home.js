import React, { useEffect, useState } from 'react';
import Calculation from '../Calculation/Calculation';
import { faCoffee, faDumbbell, faMasksTheater } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../Card/Card';
import './Home.css';

const Home = () => {
    const[activities,setActivities]=useState([]);

    useEffect(()=>{
        fetch('activity.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[]);
    
console.log(activities);
    return (
        <div className='activities-container'>
            <div className='card-section'>
                <div className='header-container'>
                    <div className='title'>
                        <FontAwesomeIcon className='icon' icon={faMasksTheater}></FontAwesomeIcon>
                        <h1>Group of Impetuous</h1>
                    </div>       
                        <h2>Select today's activity</h2>
                </div>
                <div className='card-container'>
                    {
                        activities.map(activity=><Card
                        key={activity.id}
                        activity={activity}
                        ></Card>)
                    }
                </div>
            </div>
            <div>
                <Calculation></Calculation>
            </div>
        </div>
    );
};

export default Home;