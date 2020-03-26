import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Formation from './components/Formations/Formations'

class App extends Component {
  render () {
    return (
      <div>
        <Navbar/>
        <Banner/>
        <Formation/>
      </div>
    )
  }
}

export default App;
