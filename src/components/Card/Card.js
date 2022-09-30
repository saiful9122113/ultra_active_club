import React from 'react';
import './Card.css';

const Card = ({activity,getTime}) => {
    const {img,title,watchTime,totalTime,description}=activity;
      
    return (
        <div>           
            <div className='card'>
                <img src={img} alt="" />
                <div className='card-info'>
                    <h1>{title}</h1>
                    <p>{description}</p>
                    <h5>Deviation time: {watchTime}</h5>
                    <h5>Required time: {totalTime}</h5>
                </div>
                <button className='btn-card' onClick={()=>getTime(totalTime)}>
                    <h2 className='btn-text'>Add to Cart</h2>
                </button>
            </div>
        </div>
    );
};

export default Card;