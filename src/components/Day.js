import React from 'react'

var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

const Day = ({day, index}) => {
    return (
        
        <div class="list-group-item">
            <h4 class="d-flex w-100">{getWeekdayFromIndex(index)}</h4>
            <h5 class="d-flex w-100">({getDateFromIndex(index)})</h5>
            <h5 class="mb-1">{day.weather[0].main}</h5>
            <h6 class="mb-2">High: {day.temp.max}</h6>
            <h6 class="mb-2">Low: {day.temp.min}</h6>
        </div>
    )
};

function getWeekdayFromIndex(index) {
    var d = new Date();
    var n = (index + d.getDay()) % 7;
    return weekday[n];
}

function getDateFromIndex(index) {
    var d = new Date();
    d.setDate(d.getDate() + index);
    return (d.getMonth() + 1).toString() + "/" + d.getDate().toString();
}

export default Day;