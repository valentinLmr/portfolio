import React, { Component } from 'react'
import Skill from './Skill/Skill'

class Skills extends Component{

    states = {
        skills:{
            Ruby:{
                percentage: 75
            },
            MySQL:{
                percentage: 75
            },
            Rails:{
                percentage: 80
            },
            HTML:{
                percentage: 90
            },
            CSS:{
                percentage: 80
            },
            JavaScript:{
                percentage: 75
            },
            React:{
                percentage: 70
            },
            Redux:{
                percentage: 65
            },
            Git:{
                percentage: 80
            },
        }
    }
    render () {
       
        const skillsArray = []

        const skillsState = {
            ...this.states.skills
        }
        
        for (let key in skillsState){ 
            skillsArray.push({
                name: key,
                percentage: this.states.skills[key].percentage
            })
        }

        const skills = skillsArray.map(skill => {
           return  (        
              <Skill percentage={skill.percentage}/>
           )
        })

            
        return (
            <div>
                <ul>
                    {skills}
                </ul>
            </div>

        )
    }
}

export default Skills;

