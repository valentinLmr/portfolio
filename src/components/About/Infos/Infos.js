import React, { Component } from 'react';
import './infos.css';
import profil from '../../../assets/Images/profilPic.jpg';
import Info from './Info/Info'

class Infos extends Component {
    states= {
        infos:{
            Curieux:{
                image: "fas fa-search"
            },
            Creatif:{
                image: "fas fa-lightbulb"
            },
            Investit:{
                image: "fas fa-bolt"
            },
            Professionnel:{
                image: "fas fa-briefcase"
            },
            Passionné:{
                image: "fas fa-heart"
            } 
        }
    }
    render () {

        const infosArray = []

        const infosState = {
            ...this.states.infos
        }
        
        for (let key in infosState){ 
            infosArray.push({
                name: key,
                image: this.states.infos[key].image
            })
        }

        const infos = infosArray.map(info => {
           return  (   

                        <Info 
                        key={info.name}
                        img={info.image}
                        name={info.name}/>
           )
        })
        return (
            <div className="InfosContainer">
                <div className='infosBox'>
                    <div>
                        <h1>Hello Everybody</h1>
                    </div>                   
                     <div className='profil'>
                        <div>
                            <h1>
                            <img className="profil_pic"src={profil} alt='profil'/>
                            </h1>
                        </div>
                        <div >
                            <h1 className="emoji_hello"><span role='img' aria-label='emoji surf'>🤙</span></h1>
                        </div>
                    </div>
                    <div>
                        <p className='text_profil'><strong><i>Hello, je suis Valentin Lemaire, Developpeur Web passionné et chevronné près à réaliser vos projets les plus fous"</i></strong></p>
                    </div>
                    <div className="Infos">
                        {infos}
                    </div>
                </div>
            </div>
        )
    }
}


export default Infos