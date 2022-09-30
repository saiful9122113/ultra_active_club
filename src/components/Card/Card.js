import React from 'react';
import './Card.css';

const Card = ({activity,right,setRight}) => {
    const {img,title,watchTime,totalTime,id,update}=activity;

    const handleRightSide=()=>{
        const info={
            totalTime,
            id,
            update
        };

    setRight([info]);
        if(right){
                right.find(p=>{
                    if(p.id===id){
                        p.update=p.update+1;
                        setRight(right);
                        
                        }
                    else{
                        const newData=[...right,info];
                        setRight(newData);
                        
                    }
                })

        }
        else{
            setRight([info]);
            
        }
    }; 
      
    return (
        <div>           
            <div className='card'>
                <img src={img} alt="" />
                <div className='card-info'>
                    <h1>{title}</h1>
                    <p>Deviation time: {watchTime}</p>
                    <p>Required time: {totalTime}</p>
                </div>
                <button className='btn-card' onClick={handleRightSide}>
                    <h2 className='btn-text'>Add to Cart</h2>
                </button>
            </div>
        </div>
    );
};

export default Card;