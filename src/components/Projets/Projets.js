import React from 'react'
import style from './Projet.module.css'
import budgety from '../../assets/Images/Budgety.png'
import Forkify from '../../assets/Images/Forkify.png'
import Mypark from '../../assets/Images/Mypark.png'
import Sharemyplan from '../../assets/Images/Sharemyplan.png'
const projets = props => (

    <div className={style.ProjetsContainers} id="Projet">
        <h2 style={{fontSize:'50px', margin: '10vh 0'}}><strong><u>PROJETS</u></strong></h2>
        <div className= {style.Projets}>



            <div className={style.Projet}
            style={{backgroundImage: `url(${budgety})`, backgroundSize:'cover'}}>
                <div className={style.Hover}>
                    <p></p>
                </div>
            </div>
            <div className={style.Projet}
            style={{backgroundImage: `url(${Forkify})`, backgroundSize:'cover'}}>
                <div className={style.Hover}>
                    <p></p>
                </div>
            </div>
            <div className={style.Projet}
            style={{backgroundImage: `url(${Sharemyplan})`, backgroundSize:'cover'}}>
                <div className={style.Hover}>
                <p></p>
                </div>
            </div>
            <div className={style.Projet}
            style={{backgroundImage: `url(${Mypark})`, backgroundSize:'cover'}}>
                <div className={style.Hover}>
                <p></p>
                </div>
            </div>
        </div>
    </div>
   
)

export default projets

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