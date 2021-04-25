import React, { Component } from 'react';
import ForecastList from './components/ForecastList';
import Header from './components/Header';

class App extends Component {
  state = {
    forecasts: []
  }

  constructor(props) {
    super(props);
    this.handleClicked = this.handleClicked.bind(this);
  }

  handleClicked() {
    this.setState({
      forecasts: [
        { city: 'Newberg', st: 'OR' },
        { city: 'Henderson', st: 'NV' },
        { city: 'Murfreesboro', st: 'TN' }
      ]
    });
  }

  render() {
    return (
      <div>
        <Header />
        <ForecastList forecasts={this.state.forecasts} />
        <div className='fixed-action-btn'>
          <button onClick={this.handleClicked} className='btn-floating large red'>
            <i className='material-icons'>add</i>
          </button>
        </div>
      </div>
    );
  }

  
}

export default App;
