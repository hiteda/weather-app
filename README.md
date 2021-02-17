# Weather Comparison App

The Weather Comparison App lets you compare the 7-day forecast of multiple cities using the [OpenWeatherMap API](https://openweathermap.org/api) and [OpenCageData](https://opencagedata.com/)'s geocoding API.

## Requirements

This is a React application, so React and node.js are required to run it. You will also need API keys for the [OpenWeatherMap API](https://openweathermap.org/api) and for [OpenCageData's geocoding API](https://opencagedata.com/). Once you have your API keys, add them to 'src/config/dev.js' with the following format:
```
// dev.js

module.exports = {
    OWMAppId: <your-id-string>,
    openCageApiKey: <your-id-string>
};
```

## Running the app

In the project directory, first run:

### `npm install`

to install the necessary packages, then run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.
