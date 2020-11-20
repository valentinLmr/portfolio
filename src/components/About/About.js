import React from 'react'
import Infos from './Infos/Infos'
import Skills from './Skills/Skills'
import style from './About.module.css'



const about = props => (
    <div className={style.AboutContainer} id="About">
        <div className={style.DivContainer}>
            <Infos/>
            <Skills/>
            
        </div>
    </div>
)

export default about