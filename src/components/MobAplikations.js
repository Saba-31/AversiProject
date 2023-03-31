import React from 'react';
import iphone from "../iponeImg/iphone-11.png"
import text from "../iponeImg/Group437.png"
import "./MobAplikations.css"

const MobAplikations = () => {
    return (
        <div className='mob-aplikations-container'>
            <img src={iphone} alt="iphone" className='iphone' />
            <img src={text} alt="text" className='text' />
        </div>
    );
}

export default MobAplikations;
