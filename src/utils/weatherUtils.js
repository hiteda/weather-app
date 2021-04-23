import icons from '../icons';

const weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

export const iconFromId = (id) => {
    // See https://openweathermap.org/weather-conditions
    if (id >= 200 && id < 300) {
        return icons.thunder;
    }
    else if (id >= 300 && id < 600) {
        // 300s are actually drizzle, could change icon for that
        return icons.rainy;
    }
    else if (id >= 600 && id < 700) {
        // TODO: Icon for snow
        return icons.rainy;
    }
    else if (id >= 700 && id < 800) {
        // Atmosphere
        // TODO: Add icons for these. Mist, smoke, haze, dust, tornadoes, etc.
        return icons.thunder;
    }
    else if (id === 800) {
        return icons.sunny;
    }
    else {
        // cloudy
        switch (id) {
            case 801:
            case 802:
                return icons.partlyCloudy;
            case 803:
                return icons.mostlyCloudy;
            case 804:
                return icons.overcast;
            default:
                console.log('Unknown ID: ' + id)
                return icons.unknown;
        }
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