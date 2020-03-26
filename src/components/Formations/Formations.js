import React, { Component } from 'react';
import styles from './Formation.module.css'

class Formation extends Component {
    state = {
        formations:{
            BacES:{
                year: 2015,
                school: 'Charlotte Perriand',
                place: 'Genech',
                description: '',
                actif: false
            },
            DutTC:{
                year: 2017,
                school: 'IUT Valenciennes',
                place: 'Valenciennes',
                description: '',
                actif: false
            },
            NCPIF:{
                year: 2018,
                place: 'Lille',
                school: 'EFAB',
                description: '',
                actif: false
            },
            LeWagon:{
                year: 2019,
                place: 'Lille',
                school: 'EuraTechnologie',
                description: '',
                actif: false
            }
        }
    }
    render () {
            const formationsArray = []

        for (let key in this.state.formations){
            formationsArray.push({
                name: key,
                year: this.state.formations[key].year,
                place: this.state.formations[key].place,
                school: this.state.formations[key].school,
                description: this.state.formations[key].description
            })
        }
            
            const years = formationsArray.map(formation => {
               console.log(formation)
               return  <h3>{formation.year}</h3>
            })
        return (
            <div className={styles.Years}>
                {years}
            </div>

        )
    }
}

export default Formation