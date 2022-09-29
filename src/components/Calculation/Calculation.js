import React from 'react';
import './Calculation.css';
import { faDumbbell, faLocationDot, faMasksTheater } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Calculation = () => {
    return (
       <div>
            <div className='profile'>
                <img src="saiful.png" alt="" />
                <div>
                    <h1 className='profile-text'>Md. Saiful Islam</h1>
                    <div className='icon-place-activity'>
                        <FontAwesomeIcon className='icon' icon={faLocationDot}></FontAwesomeIcon>
                        <p>Gopalganj,Dhaka</p>
                    </div>
                </div>
            </div>

            <div id='measurement-container'>
                <div id='weight'>
                    {/* 53<sub>kg</sub> */}
                    <h3>53<sub>kg</sub></h3>
                    <p>Weight</p>
                </div>
                <div id='height'>
                    {/* 53<sub>kg</sub> */}
                    <h3>65<sub>feet</sub></h3>
                    <p>Height</p>
                </div>
                <div id='age'>
                    {/* 53<sub>kg</sub> */}
                    <h3>25<sub>yrs</sub></h3>
                    <p>Age</p>
                </div>
                
            </div>

            <h1 id='break-title'>Add a break time</h1>

            <div id='break-times-container'>
                <div className='break'>
                    <h3>10m</h3>
                </div>
                <div className='break'>
                    <h3>15m</h3>
                </div>
                <div className='break'>
                    <h3>20m</h3>
                </div>
                <div className='break'>
                    <h3>25m</h3>
                </div>
                <div className='break'>
                    <h3>30m</h3>
                </div>
            </div>

            <h1 id='activity-details-title'>Activity details</h1>

                <div id='work-details-1' className='work-details'>
                    <h3>Activity time :</h3>
                    <div className='work-time'>
                        <h3>dinamic</h3>
                        <p>hour</p>

                    </div>
                </div>

                <div className='work-details'>
                    <h3>Activity time :</h3>
                    <div className='work-time'>
                        <h3>dinamic</h3>
                        <p>hour</p>

                    </div>
                </div>

       </div>
    );
};

export default Calculation;