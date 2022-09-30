import React, { useEffect,useState } from 'react';
import { faArrowRight, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
import './Calculation.css';
import { faDumbbell, faLocationDot, faMasksTheater } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

const Calculation = ({id,time,update,learningTimes}) => {
    // console.log(id,time,update);

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


// const addition=(id,update)=>{
//     let sum=0;
//     let t=id*update;
//     sum=t;
//     return sum;
// }
         
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

            <div className='break-cntlr'>
                <h4>Add a break</h4>

                <div className='add-break'>
                        <button onClick={() => getTime(10)}> 10m</button>
                        <button onClick={() => getTime(20)}> 20m</button>
                        <button onClick={() => getTime(30)}> 30m</button>
                        <button onClick={() => getTime(40)}> 40m</button>
                </div>
            </div>

            <h1 id='activity-details-title'>Activity details</h1>

                <div className='work-details'>
                    <h3>Activity time :</h3>
                    <div className='work-time'>
                        {/* <h3>dinamic</h3> */}
                        {/* {addition(id,update)} */}
                        <p>hour</p>

                    </div>
                </div>

                <div id='work-details-2' className='work-details'>
                    <h3>Break time :</h3>
                    <div className='work-time'>
                        <h3>{breakTimes}</h3>
                        <p>minutes</p>

                    </div>
                </div>

                <button id='complete-btn' onClick={notify}>
                    <h2 id="complete-btn-text">Activity Completed</h2>
                </button>
                <ToastContainer/>

       </div>
    );
};

export default Calculation;