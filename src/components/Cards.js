import React from 'react';
import cardItems from "./cardItems";
import "./reset.css";
import "./Cards.css";
// import calendar from "../cardimages/calendar.svg"

// import calendar from "../cardimages/calendar.svg"

const Cards = () => {
    return (
        <div className='cards'>
            {cardItems.map(item => {
                return (
                    <div className='card' key={item.id}>
                        <div className='images'>
                        {item.img}
                        </div>
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                    </div>
                )
            })}
            {/* <div className='card'>
                <img src={calendar} alt="image"></img>
            </div> */}

            
        </div>
    );
}

export default Cards;
