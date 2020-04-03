import React, { Component } from 'react';
import styles from './Formation.module.css'

class Formation extends Component {
    state = {
        formations:{
            BacES:{
                year: 2015,
                school: 'Charlotte Perriand',
                place: 'Genech',
                actif: true,
                description: "Le bac ES est un bac pluridisciplinaire qui donne un profil équilibré, polyvalent, compétent dans tous les domaines : français, maths, langues, histoire, philo, droit, éco... Le baccalauréat économique et social implique une attention particulière à l'environnement socio-économique et à l'actualité qui vous entoure... comprendre et analyser les rouages économiques et sociaux du pays (monnaie, syndicats, organisations, l'emploi, la bourse...). Aussi il ouvre vers l'histoire et la géographie, les mathématiques, les langues. L'objectif du Bac ES est d'approfondir une culture économique fondée sur l'esprit de synthèse, la curiosité.Il s'agit d'être au top dans l'ensemble des matières.",
                
            },
            DutTC:{
                year: 2017,
                school: 'IUT Valenciennes',
                place: 'Valenciennes',
                description: "Découvrir l'environnement professionnel, Identifier et communiquer, traité l'information, agir sur les marchés, se professionnaliser, élargir ses compétences en gestion, développer ses performances commerciales, s'adapter aux évolutions, maitriser les outils de management et du marketing mix",
                actif: false
            },
            NCPIF:{
                year: 2018,
                place: 'Lille',
                school: 'EFAB',
                description: "Recherche et évaluation de biens immobiliers d’habitation et d’entreprise, Négociation et conclusion de mandats de vente, de location ou de recherche, Recherche et présentation d’acquéreurs / locataires (particuliers et professionnels), Cerner les besoins et attentes des clients acquéreurs et locataires, conseil en financement immobilier : capacité de financements et types de prêts, conseil en investissement immobilier : rentabilité et sécurisation de l’achat, conseil en investissement financier : actions, obligations, assurance vie, SCPI… Présentation, argumentation et vente du bien, conclusion de la vente ou de la mise en location de tous types d’immeubles",
                actif: false
            },
            LeWagon:{
                year: 2019,
                place: 'Lille',
                school: 'EuraTechnologie',
                description: "9 semaines d'apprentissage intensif (Ruby On Rails, HTML5, CSS/Sass, Bootstrap, JavaScript, jQuery, SQL, PostgreSQL, MVC architecture, git, GitHub, and Heroku)",
                actif: false
            },
            Online:{
                year:2020,
                place: null,
                school: 'Udemy',
                description: 'TODO',
                actif: false,
            }
        }
    }


    clickedHandler(key) {
        

        const formationData= {
            ...this.state.formations
        };

        for(let key in formationData){
             formationData[key].actif = formationData[key].actif ? false : formationData[key].actif
        };
        console.log(formationData)
 
        const updatedElement = {
            ...formationData[key]
        };
        
        updatedElement.actif = true;
        

        formationData[key] = updatedElement;
        
        this.setState({formations: formationData});
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
                const formations = this.state.formations[formation.name]
               return  (
                <h3 
                className={formations.actif ? [styles.Actif, styles.Year].join(' '): styles.Year}
                onClick={() => this.clickedHandler(formation.name)}
                key={formation.name}>
                        {formation.year}
                </h3>
               )
            })

            const description = formationsArray.map(formation => {

                const formations = this.state.formations[formation.name]
             
                return  (
                formations.actif ? 
                <div className={styles.Description}>
                    <h3 style={{fontSize: '24px'}}><strong>{formation.name}</strong> - {formation.place}</h3>
                    <p
                    style={{fontSize: '21px'}}>{formation.description}</p>
                </div> 
                : null
                )
             })
             

            
        return (
            <div onClick={this.descriptionDisplayHandler}>
                <h2 style={{textAlign:'center',
                    margin: '3% 0',
                    fontSize: '50px',
                    color: '#1C1F29'}}><strong><u>FORMATION</u></strong>
                </h2>
                <div 
                className={styles.Years}>
                    {years}
                </div>
                {description}
            </div>

        )
    }
}

export default Formation