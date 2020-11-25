
import React, { Component } from 'react'
import './Projets.css'
import budgety from '../../assets/Images/Budgety.png'
import forkify from '../../assets/Images/Forkify.png'
import mypark from '../../assets/Images/Mypark.png'
import sharemyplan from '../../assets/Images/Sharemyplan.png'
import BurgerBuilder from '../../assets/Images/BurgerBuilder.png'
import Amazona from '../../assets/Images/Amazona.png'
import tzantza from '../../assets/Images/Tzantza.png'
import Project from './Projet/Projet';
class Projets extends Component {

    
    state = {
        projects:{
            BUDGETY:{
                img: budgety,
                url: "https://budgtily.herokuapp.com/",
                content:"Permet de gérer ton budget mensuel de facon intuitive. Ajoute tes revenus ou tes dépenses et check ton budget par mois afin d'optimiser tes économies. ",
                description:" Réalisé dans le cadre d'un cours JavaScript, ce site m'a permis de développer mes connaissances en programmation et d'appronfondir les fondamentaux de cette Technologie. Système MVC, Méthode de Class, itérations, loops, Async .... "
            },
            FORKIFY:{
                img: forkify,
                url: "https://fork-ify.netlify.com/",
                content:" Permet de trouver des recettes parmi plus de mille d'après le Scrap d'une API. Selectionne, ajuste le nombre de personnes afin d'adapter les proportions des ingredients",
                description:"Deuxième site réalisé en  JavaScript, cette application m'a permis  de consolider mes compétences acquisent  lors de mon premier site. Mise en place de class, Méthode Contructor, utilisation de State afin de traiter les données, Scrapping pour alimenter la BD, Méthode 'MVC' afin de gérer la corrélation Front-End & Back-End  ... "
            },
            SHAREMYPLAN:{
                img: sharemyplan,
                url: "https://share-my-plan.herokuapp.com/",
                content:"Solution de partage des abonnements afin de réduire le coût des services les plus demandés.",
                description:"Deuxième Réalisation from Scratch pour la fin de BootCamp 'Le Wagon'. Ce site réalisé en 2 semaines, en groupe de 4, est issu de l'idée d'un ami. Pensé dans son ensemble, la création d'une maquette via Figma et d'une base de données via un Kit du 'Wagon' a été nécessaire. Implémentation d'un système MVC à travers la framework Rails, utilisation d'Ajax,  utilisation de divers GEM (pundit, stripe, Fbconnect...) et feature afin d'améliorer l'expérience utilisateur et la sécurité du site. Ce site complet utilisant nos compétences Fullstack nous a permis de développer nos compétences à un niveau supérieur",
            },
            MYPARK:{
                img: mypark,
                url: 'https://we-park.herokuapp.com/',
                content:" Location de place de parking",
                description:"Première réalisation from Scratch pour la fin du BootCamp 'Le Wagon'. Ce site réalisé en 1 semaine en groupe de 4 est une réplique du service 'AirBnb'(location de place de Parking), nous a permis de mettre en application les enseignements et pratiques acquises durant la formation. Mise de place d'une base de données SQL, système MVC à travers la framework Rails, filtrage selon plusieurs critères (Prix, Espace, Géocalisation ...), Implémentation de divers GEM (pundit, stripe, GeoCode ...) et features afin d'améliorer l'expérience utilisateur et la sécurité du site. Utilisation de GitHub en groupe afin de répartir les tâches"

            },
            TZANTZA:{
                img:tzantza,
                url:"https://tzantza.netlify.app/",
                content:'Site Vitrine pour une restaurant Basé à Paris',
                description:"Premier projet professionnel réalisé avec des technologies Front-end. HTML, CSS et JS. Prise de connaissance du projet, mise en place d'un devis, contacts réguliers avec le client afin de valider l'implémentation des features... (Dans l'attente de la fin du confinement afin d'implémenter le Script Zenchef et joindre la réalisation à la référence du restaurant) "

            },
            BURGERBUILDER:{
                img:BurgerBuilder,
                url:"https://burger-builder-command.netlify.app/",
                content: 'application pour Construire ton Hamburger',
                description: "Réalisation d'une première application utilisant le framework React. Mise en place d'une Base de donnée 'FireBase', d'un espace client,  utilisation des fondamentaux de React puis implémentation de Redux afin d'améliorer l'application, utilisation du LocalStorage afin de sauvegarder des données."

            },
            AMAZONA:{
                img:Amazona,
                url:"https://proxyshopping.herokuapp.com/",
                content: 'Site e-commerce dans le but de vendre des produits textile',
                description: "Dernière réalisation en utilisant les Technologies React, Redux, Hooks et Node.js. Création d'une Api afin de gérer une base de données Mongo, création d'un espace client avec la possibilité de filtrer les produits, faire un panier, acheter et vérifier l'avancement de la livraison, d'un espace administrateur avec la création, modification ou suppression de produit, prise en charge des commandes. Implémentation de plusieurs features afin d'avoir accès à un site complet et fonctionnel"

            }
        }
    }



    render() {

        

        const projectsArray = []

        const projectsState = {
            ...this.state.projects
        }
        
        for (let key in projectsState){ 
            projectsArray.push({
                name: key,
                image: this.state.projects[key].img,
                url: this.state.projects[key].url,
                content: this.state.projects[key].content,
                descritpion: this.state.projects[key].description
            })
        }
  
  

        const project = projectsArray.map((project, index) => {
           if (index % 2 === 0) {
               return(
            <div className="project_box even">
                <div className="project_description">
                <p>
                    {project.descritpion}
                </p>
                 </div>
            <Project 
            key={project.name}
            name={project.name}
            image={project.image}
            url={project.url}
            content={project.content}/>
            </div>)
           } else {
               return(<div className='project_box'>
               <Project 
            key={project.name}
            name={project.name}
            image={project.image}
            url={project.url}
            content={project.content}/>
            <div className='project_description'>
                <p>
                    {project.descritpion}               
                </p>
            </div>
            
            </div>)
           }
           
        })
       window.addEventListener('resize', console.log(window.outerWidth))

        return(

            <div className='ProjetsContainers' id="Projet">
                <div style={{margin: '9vh 0'}}>
                    
                    <h2 style={{fontSize:'50px'}}><u>PROJETS</u></h2>
                    <p style={{fontSize:'12px'}}><i>Cliquez pour visiter</i></p>
                </div>
            
                <div className='Projets'>
                    {project}
                </div>
            </div>
           
        )
    }
} 

export default Projets