import React from 'react'
import Infos from './Infos'
import Skills from '../Skills/Skills'
import Navbar from '../Navbar/Navbar'



const about = props => (
    <div style= {{height: '78vh'}}>
        <h1 style={{fontSize:'50px', textAlign:'center', color:'#1C1F29', margin:'80px auto'}}><strong><u>ABOUT</u></strong></h1>
        <div style={{display: 'flex'}}>
            <Infos/>
            <Skills/>
            
        </div>
    </div>
)

export default about