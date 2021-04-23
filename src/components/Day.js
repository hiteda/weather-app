import React from 'react'
import { getWeekdayFromIndex, getDateFromIndex, iconFromId } from '../utils/weatherUtils';

const Day = ({day, index}) => {
    const weather = day.weather[0];
    return ( 
        <div className="list-group-item col-sm-2" style={{ 'maxWidth': '169px' }} >
            <h4 className="d-flex w-100">{getWeekdayFromIndex(index)}</h4>
            <h5 className="d-flex w-100">({getDateFromIndex(index)})</h5>
            <img src={iconFromId(weather.id)} alt={weather.description} />
            <h5 className="mb-1">{weather.description}</h5>
            <h6 className="mb-2">High: {day.temp.max}</h6>
            <h6 className="mb-2">Low: {day.temp.min}</h6>
        </div>
    )
};

export default Day;