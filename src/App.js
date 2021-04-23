import React, { Component } from 'react';
import Forecast from './components/Forecast';
import Header from './components/Header';

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <Forecast city={'Newberg'} st={'OR'} />
        <Forecast city={'Murfreesboro'} st={'TN'} />
        <Forecast city={'Douglasville'} st={'GA'} />
        <Forecast city={'Tulsa'} st={'OK'} />
      </div>
    );
  }

  
}

export default App;
