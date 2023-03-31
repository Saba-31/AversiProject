import React from 'react';
import calendar from '../cardimages/calendar.svg'
import "./Calendar.css"

const Calendar = () => {
    return (
        <div className='calendar-border'>
            <img src={calendar} alt="" className='calendar'></img>
        </div>
    );
}

export default Calendar;
