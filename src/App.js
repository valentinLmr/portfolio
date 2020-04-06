import React, { Component } from 'react';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Formation from './components/Formations/Formations';
import Projet from './components/Projets/Projets';
import About from './components/About/About';
import Contact from './components/Contact/Contact'
class App extends Component {

  
  render () {

  
  
    return (
       
       <div>
        <Navbar/>      
        <Banner/>
        <About/>
        <Projet/>
        <Formation/>
        <Contact/>
      </div>
    )
  }
}

export default App;
