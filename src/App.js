import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import './App.css';

class App extends Component {
  render () {
    return (
      <div>
        <Navbar/>
        <Banner/>
      </div>
    )
  }
}

export default App;
