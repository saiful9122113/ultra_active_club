import React from 'react';
import './Card.css';

const Card = ({activity}) => {
    // console.log(activity.title);
    return (
        <div>           
            <div className='card'>
                <img src={activity.img} alt="" />
                <div className='card-info'>
                    <h1>{activity.title}</h1>
                    <p>Deviation time: {activity.watchTime}</p>
                    <p>Required time: {activity.totalTime}</p>
                </div>
                <button className='btn-card'>
                    <h2 className='btn-text'>Add to Cart</h2>
                </button>
            </div>
        </div>
    );
};

export default Card;