import React, { Component } from 'react';
import Formation from './components/Formations/Formations';
import Projet from './components/Projets/Projets';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';
import Particles from 'react-particles-js'
class App extends Component {

  
  render () {

  
  
    return (
      
       <div>
         <Particles 
      params={{ 
       "particles": {
         "number": {
         "value": 80
         },
         "size": {
         "value": 2.5
         }
     },
         "interactivity": {
         "events": {
         "onhover": {
         "enable": true,
         "mode": "repulse"
         }
         }
         }
     }} >
     </Particles>
         <Layout>
          <About/>
          <Projet/>
          <Formation/>
          <Contact/>
        </Layout>
      </div>
    )
  }
}

export default App;
