import React from 'react'
import Infos from './Infos/Infos'
import Skills from './Skills/Skills'
import style from './About.module.css'



const about = props => (
    <div className={style.AboutContainer}>
        <h1 style={{fontSize:'50px', textAlign:'center', color:'#1C1F29', margin:'80px auto'}}><strong><u>ABOUT</u></strong></h1>
        <div className={style.DivContainer}>
            <Infos/>
            <Skills/>
            
        </div>
    </div>
)

export default about