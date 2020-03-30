import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Formation from './components/Formations/Formations';
import About from './components/About/About';
import Skills from './components/Skills/Skills'

class App extends Component {
  render () {
    return (
      <div>
        <Navbar/>
        <Banner/>
        <About/>
        <Formation/>
        <Skills/>
      </div>
    )
  }
}

export default App;
