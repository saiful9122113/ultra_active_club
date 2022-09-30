import React, { useEffect, useState } from 'react';
import Calculation from '../Calculation/Calculation';
import { faCoffee, faDumbbell, faMasksTheater } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from '../Card/Card';
import './Home.css';
import Swal from 'sweetalert2/dist/sweetalert2.js'

const Home = () => {
    const[activities,setActivities]=useState([]);
    const[right,setRight]=useState([]);

    useEffect(()=>{
        fetch('activity.json')
        .then(res=>res.json())
        .then(data=>setActivities(data))
    },[]);


    const [learningTimes, setLearningTimes] = useState(0);
    const getTime = (props) => {
        const updataTime = learningTimes + props
        setLearningTimes(updataTime);
    }
    


    
    console.log(right);
// console.log(activities);
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
                        right={right}
                        setRight={setRight}
                        ></Card>)
                    }
                </div>
            </div>
            <div className='calculate-section'>
                {right?.map(element=><Calculation
                id={element.id}
                time={element.totalTime}
                key={element.id}
                learningTimes={learningTimes}
                update={element.update}
                ></Calculation>)}
            </div>
        </div>
    );
};

export default Home;