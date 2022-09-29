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

            <div>
                <div>
                    <h1>53</h1>
                </div>
            </div>

       </div>
    );
};

export default Calculation;