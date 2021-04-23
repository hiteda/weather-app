import icons from '../icons';

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

export const weather = {
    'clear sky': {
        icon: icons.sunny,
        description: 'Clear'
    },
    'light rain': {
        icon: icons.rainy,
        description: 'Light Rain'
    },
    'scattered clouds': {
        icon: icons.partlyCloudy,
        description: 'Partly Cloudy'
    },
    'overcast clouds': {
        icon: icons.overcast,
        description: 'Overcast'
    },
    'broken clouds': {
        icon: icons.mostlyCloudy,
        description: 'Mostly Cloudy'
    },
    'moderate rain': {
        icon: icons.rainy,
        description: 'Moderate Rain'
    },
    'heavy intensity rain': {
        icon: icons.rainy,
        description: 'Intense Rain'
    },
    'few clouds': {
        icon: icons.partlyCloudy,
        description: 'Few Clouds'
    }
};

export const getWeekdayFromIndex = (index) => {
    var d = new Date();
    var n = (index + d.getDay()) % 7;
    return weekday[n];
}

export const getDateFromIndex = (index) => {
    var d = new Date();
    d.setDate(d.getDate() + index);
    return (d.getMonth() + 1).toString() + "/" + d.getDate().toString();
}