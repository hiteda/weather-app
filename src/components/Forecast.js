import React, { Component } from 'react'
import Day from './Day'
const keys = require('../config/keys')


class Forecast extends Component {

    constructor(props) {
        super(props);
        this.state = {
            forecast: []
        };
        this.city = props.city;
        this.st = props.st;
    }

    render() {
        return (
            <div>
                <center><h2>{this.city}, {this.st}</h2></center>
                <div class="d-flex flex-row">
                    {this.state.forecast.map((day, index) => (
                        <Day day={day} index={index}/>
                    ))}
                </div>
            </div>
        );
    }

    componentDidMount() {
        fetch(this.getGeocodeUrl(this.city, this.st), {
         method: 'GET',
         headers: {
           'Content-Type': 'application/json'
         } 
        })
        .then(res => res.json())
        .then((data) => {
          this.getWeatherData(data);
        })
        .catch(console.log);
    }
    
    getWeatherData(data){
      var coords = this.getCoordinatesFromData(data);
      var url = this.getWeatherUrl(coords);
      fetch(url, {
          method: 'GET',
          headers: {
              'Content-Type': 'application/json'
          }
      })
      .then(res => res.json())
      .then((data) => {
          this.setState({forecast: data.daily})
      })
      .catch('getWeatherData() error: ' + console.log);
    }
  
    getGeocodeUrl(city, state) {
      return 'https://cors-anywhere.herokuapp.com/'
                + 'https://api.opencagedata.com/geocode/v1/json?q='
                + city
                + '%2C%20'
                + state
                + '&key=' + keys.openCageApiKey
                + '&language=en&pretty=1&no_annotations=1';
  
    }
  
    getCoordinatesFromData(data) {
      var bounds = data.results[0].bounds;
      var latf = (parseFloat(bounds.northeast.lat) + parseFloat(bounds.southwest.lat)) / 2.0;
      var lngf = (parseFloat(bounds.northeast.lng) + parseFloat(bounds.southwest.lng)) / 2.0;
      return [latf.toString(), lngf.toString()];
    }
  
    getWeatherUrl(coords) {
      return 'https://cors-anywhere.herokuapp.com/'
              + 'https://api.openweathermap.org/data/2.5/onecall?'
              + 'lat=' + coords[0]
              + '&lon=' + coords[1]
              + '&exclude=current,hourly,minutely&units=imperial'
              + '&appid=' + keys.OWMAppId;
    }
}


export default Forecast;