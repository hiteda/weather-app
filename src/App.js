import React, { Component } from 'react'
import Forecast from './components/Forecast'

class App extends Component {

  render() {
    return (
      <div>
        <Forecast city={'Newberg'} st={'OR'} />
        <Forecast city={'Murfreesboro'} st={'TN'} />
        <Forecast city={'New Braunfels'} st={'TX'} />
        <Forecast city={'Tulsa'} st={'OK'} />
      </div>
    );
  }

  
}

export default App;
