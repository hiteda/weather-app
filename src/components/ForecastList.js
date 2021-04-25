import React from 'react';
import Forecast from './Forecast';

const ForecastList = ({ forecasts }) => {
    const renderForecasts = (forecasts) => {
        if (forecasts === undefined || forecasts.length === 0) {
            return null;
        }
        return forecasts.map(forecast => {
            return <Forecast city={forecast.city} st={forecast.st} key={forecast.city + forecast.st} />;
        });
    };
    return (
        <div>
            {renderForecasts(forecasts)}
        </div>
    );
};

export default ForecastList;