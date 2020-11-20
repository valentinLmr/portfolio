
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
                description:" Réalisé dans le cadre d'un cour JavaScript, ce site m'à permis de développer mes connaissances en programmation et  d'apprendre les fondamentales de cette Technologies. Système MVC, Methode de Class, itération, loops .... "
            },
            FORKIFY:{
                img: forkify,
                url: "https://fork-ify.netlify.com/",
                content:" Permet de trouver des recettes parmi plus de mille d'après le Scrap d'une API. Selectionne, ajuste le nombre de personnes afin d'adapter les proportions des ingredients",
                description:"Deuxième site réalisé en  JavaScript, cette application m'à permis  de renforcer mes compétences acquisent  lors de mon premier site internet. Mise en place de class afin de traiter les données, Scrapping le but d'alimenté un base de donée, Méthode'MVC' afin de gerer la corrélation Front-End && Back-End etc ... "
            },
            SHAREMYPLAN:{
                img: sharemyplan,
                url: "https://share-my-plan.herokuapp.com/",
                content:"Solution de partage des abonnements afin de réduire le coût des services les plus demandés.",
                description:"Deuxième Réalisation from Scratch pour le fin de BootCamp 'Le Wagon', ce site réalisé en 2 semaines en groupe de 4 ce site, issue de l'idée d'un ami à du être pensée d'en son ensemble. Création d'une maquette, d'une Base de donées SQL, d'un système MVCà travers la framework Rails, utilisation d'Ajax,  Implementation de divers GEM (pundit, stripe, Fbconnect...) et feature afin d'améliorer l'expérience utilisateur et la sécurité du site. Ce site complet regroupant des compétences Fullstack nous à permis de développer nos compétences à un niveaux supérieur",
            },
            MYPARK:{
                img: mypark,
                url: 'https://we-park.herokuapp.com/',
                content:" Location de place de parking",
                description:"première Réalisation from Scratch pour le fin de BootCamp 'Le Wagon', ce site réalisé en 1 semaines en groupe de 4, qui est une réplique du site 'AirBnb' m'à permis de mettre en application les enseignements et pratiques acquient durant la formation. Mise de place d'une Base de donées SQL, système MVCà travers la framework Rails, filtrage  selon plusieur critère (Prix, Espace, Géocalisation ...), Implementation de divers GEM (pundit, stripe, GeoCode ...) et feature afin d'améliorer l'expérience utilisateur et la sécurité du site utilisation de GitHub en groupe afin de répartir les taches"

            },
            TZANTZA:{
                img:tzantza,
                url:"https://tzantza.netlify.app/",
                content:'Site Vitrine pour une restaurant Basé à Paris',
                description:"Premier projet professionnel réalisé avec des technologies Front-end. HTML, CSS et JS. Prise de connaissance du projet, mise en place d'un devis, contact régulier avec le client afin de valider l'implementation des features... (Dans l'attente de la fin du confinement afin d'implementer le Script Zenchef et joindre la réalisation à la référence du restaurant) "

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
                description: "Dernière réalisation en utilisant les Technologie React, Redux, Hooks et Node.js. Création d'une Api afin de gérer une base de donées Mongo, création d'un espace client avec la possibilité de filtrer les produits, faire un panier, acheter et verifier l'avancement de la livraison; d'un espace Administrateur avec la création, modification ou suppression de produit, Prise en charge des commandes. Implementation de plusieurs features afin d'avoir accès à un site complet et fonctionnel"

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

        const project = 
            
        projectsArray.map((project, index) => {
           if (index % 2 == 0) {
               return(
            <div className="project_box">
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

 // <div class="image_holder">
    //     <a class="portfodivo_link_for_touch" href="https://www.mh-deco.fr/portfolio_page/amenagement-maison-individuelle-en-location-la-jarrie-17/" target="_self">
    //         <span class="image">
    //             <img width="960" height="720" src="https://www.mh-deco.fr/wp-content/uploads/2020/03/mh-deco-la-rochelle-interieur-la-jarrie.png" class="attachment-full size-full wp-post-image" alt="Aménagement d'une maison individuelle à La Jarrie par MH DECO La Rochelle" srcset="https://www.mh-deco.fr/wp-content/uploads/2020/03/mh-deco-la-rochelle-interieur-la-jarrie.png 960w, https://www.mh-deco.fr/wp-content/uploads/2020/03/mh-deco-la-rochelle-interieur-la-jarrie-300x225.png 300w, https://www.mh-deco.fr/wp-content/uploads/2020/03/mh-deco-la-rochelle-interieur-la-jarrie-768x576.png 768w" sizes="(max-width: 960px) 100vw, 960px"/>
    //         </span>
    //     </a>
        
    //     <span class="text_holder">
    //         <span class="text_outer">
    //             <span class="text_inner">
    //                 <div class="hover_feature_holder_title">
    //                     <div class="hover_feature_holder_title_inner">
    //                         <h3 class="portfolio_title">
    //                             <a href="https://www.mh-deco.fr/portfolio_page/amenagement-maison-individuelle-en-location-la-jarrie-17/">Aménagement d’une maison individuelle en location – La Jarrie (17)</a>
    //                         </h3>
    //                         <span class="separator"></span>
    //                         <span class="project_category">Nathalie Bouroumeau, Nouvelle Aquitaine, Projet 3D</span>
    //                     </div>
    //                 </div>
    //                 <span class="feature_holder">
    //                     <span class="feature_holder_icons">
    //                         <a class="lightbox" title="Aménagement d’une maison individuelle en location – La Jarrie (17)" href="https://www.mh-deco.fr/wp-content/uploads/2020/03/mh-deco-la-rochelle-interieur-la-jarrie.png" data-rel="prettyPhoto[pretty_photo_gallery]" rel="prettyPhoto[pretty_photo_gallery]">
    //                             <i class="fa fa-search fa-2x"></i>
    //                         </a>
    //                         <a class="preview" href="https://www.mh-deco.fr/portfolio_page/amenagement-maison-individuelle-en-location-la-jarrie-17/">
    //                             <i class="fa fa-link fa-2x"></i>
    //                         </a>
    //                     </span>
    //                 </span> 
    //             </span>
    //         </span>
    //     </span>
    // </div>