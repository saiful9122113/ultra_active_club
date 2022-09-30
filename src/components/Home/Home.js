import React, { useEffect, useState } from 'react';
import Calculation from '../Calculation/Calculation';
import { faMasksTheater } from '@fortawesome/free-solid-svg-icons';
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


    const [learningTimes, setLearningTimes] = useState(0);
    const getTime = (props) => {
        const updateTime = learningTimes + props
        setLearningTimes(updateTime);
    }

    return (
        <div className='activities-container'>
            <div className='card-section'>
                <div className='header-container'>
                    <div className='title'>
                        <FontAwesomeIcon className='icon' icon={faMasksTheater}></FontAwesomeIcon>
                        <h1>Daily Activities</h1>
                    </div>       
                        <h2>Select today's activity</h2>
                </div>
                <div className='card-container'>
                    {
                        activities.map(activity=><Card
                        key={activity.id}
                        activity={activity}
                        getTime={getTime}
                        ></Card>)
                    }
                </div>
            </div>

            <Calculation learningTimes={learningTimes}></Calculation>
            
        </div>
    );
};

export default Home;