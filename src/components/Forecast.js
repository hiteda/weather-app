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
                <div className="d-flex flex-row">
                    {this.state.forecast.map((day, index) => (
                        <Day day={day} index={index} key={index} />
                    ))}
                </div>
            </div>
        );
    }

    async componentDidMount() {
        const res = await fetch(this.getGeocodeUrl(this.city, this.st), {
                                                            method: 'GET',
                                                            headers: {
                                                            'Content-Type': 'application/json'
                                                        } 
                                                    }).catch(console.log);
        const data = await res.json();
        this.getWeatherData(data)
            .catch(console.log);
    }
    
    async getWeatherData(data){
        var coords = this.getCoordinatesFromData(data);
        var url = this.getWeatherUrl(coords);
        const res = await fetch(url, {
                                        method: 'GET',
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    })
                                    .catch('getWeatherData() error: ' + console.log);
        const json = await res.json();
        this.setState({forecast: json.daily});
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