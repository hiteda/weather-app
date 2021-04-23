import React from 'react'
import { getWeekdayFromIndex, getDateFromIndex, weather } from '../utils/weatherUtils';

const Day = ({day, index}) => {
    const weather = getWeatherFromDescription(day.weather[0].description);
    return ( 
        <div className="list-group-item">
            <h4 className="d-flex w-100">{getWeekdayFromIndex(index)}</h4>
            <h5 className="d-flex w-100">({getDateFromIndex(index)})</h5>
            <img src={weather.icon} />
            <h5 className="mb-1">{weather.description}</h5>
            <h6 className="mb-2">High: {day.temp.max}</h6>
            <h6 className="mb-2">Low: {day.temp.min}</h6>
        </div>
    )
};

const getWeatherFromDescription = (description) => {
    return weather[description];
};

export default Day;