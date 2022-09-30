import React, { useEffect,useState } from 'react';
import './Calculation.css';
import { faDumbbell, faLocationDot, faMasksTheater } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';

const Calculation = ({learningTimes}) => {
    const [breakTimes, setBreakTimes] = useState(0);
   
   const notify = () => {
        toast.success('😃 You are done!',{
            position: 'top-center'
        })
    }

    const getTime = time => {
        localStorage.setItem('time', time);
        setBreakTimes(time);
    }
    useEffect(() => {
        const storedTime = localStorage.getItem('time');
        setBreakTimes(storedTime);
    },[])
         
    return (
       <div id='all'>
            <div className='profile'>
                <img src="saiful.png" alt="" />
                <div>
                    <h2 className='profile-text'>Md. Saiful Islam</h2>
                    <div className='icon-place-activity'>
                        <FontAwesomeIcon className='icon' icon={faLocationDot}></FontAwesomeIcon>
                        <p>Gopalganj,Dhaka</p>
                    </div>
                </div>
            </div>

            <div id='measurement-container'>
                <div id='weight'>
                    <h2>53<sub>kg</sub></h2>
                    <p>Weight</p>
                </div>
                <div id='height'>
                    <h2>65<sub>feet</sub></h2>
                    <p>Height</p>
                </div>
                <div id='age'>
                    <h2>25<sub>yrs</sub></h2>
                    <p>Age</p>
                </div>
                
            </div>

            <div className='break-cntlr'>
                <h4>Add a break</h4>

                <div className='add-break'>
                        <button onClick={() => getTime(10)}> 10m</button>
                        <button onClick={() => getTime(20)}> 20m</button>
                        <button onClick={() => getTime(30)}> 30m</button>
                        <button onClick={() => getTime(40)}> 40m</button>
                </div>
            </div>

                <h4 id='activity-details-title'>Activity details</h4>
        
                <div className='work-details'>
                    <h5>Activity time :</h5>
                    <div className='work-time'>
                        <h3>{learningTimes}</h3>
                        <p>hour</p>

                    </div>
                </div>

                <div id='work-details-2' className='work-details'>
                    <h5>Break time :</h5>
                    <div className='work-time'>
                        <h3>{breakTimes}</h3>
                        <p>minutes</p>

                    </div>
                </div>

                <button id='complete-btn' onClick={notify}>
                    <h4 id="complete-btn-text">Activity Completed</h4>
                </button>
                <ToastContainer/>

       </div>
    );
};

export default Calculation;