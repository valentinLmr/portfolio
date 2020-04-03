import React from 'react';
import styles from './Infos.module.css';
import profil from '../../../assets/Images/valou.jpg'

const about = () => {
    return (
        <div className={styles.InfosContainer}>
            <div>
                <img style={{width:'200px', height:'200px', borderRadius:'50%'}}src={profil} alt='profil'/>
                <div style={{ width:'100%', height: 'auto', margin: '20px auto'}}>
                    <p style={{fontSize: '24px', justifyContent:'center', color: 'rgb(29, 32, 41)'}}><strong><i>"Hey, je suis Valentin, passionnée de Développement d'App Web et mobile"</i></strong></p>
                </div>
                <div className={styles.Infos}>
                    <div className={styles.Info}>
                        <div className={styles.InfoContainer}>
                            <i class="fas fa-search"></i>
                        </div>
                        <h4>Curieux</h4>
                    </div>
                    <div className={styles.Info}>
                        <div className={styles.InfoContainer}>
                            <i class="fas fa-bolt"></i>
                        </div>
                        <div className={styles.Info}>
                            <h4>Investit</h4>
                        </div>
                    </div>
                    <div className={styles.Info}>
                        <div className={styles.InfoContainer}>
                            <i class="fas fa-lightbulb"></i>
                        </div>
                        <div className={styles.Info}>
                            <h4>Creatif</h4>
                        </div>
                    </div>
                    <div className={styles.Info}>
                        <div className={styles.InfoContainer}>
                            <i class="fas fa-briefcase"></i>
                        </div> 
                        <div className={styles.Info}>
                            <h4>Professionel</h4>
                        </div>
                    </div>
                    <div className={styles.Info}>
                        <div className={styles.InfoContainer}>
                            <i class="fas fa-heart"></i>
                        </div>
                        <div className={styles.Info}>
                            <h4>Passionné</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

{/* // <div className={styles.About}>         
        //     <h2 >About</h2>         
        //     <div className={styles.InsideAbout}>
        //         <div 
        //         className={styles.AboutPhoto}>
        //             <img src={profil} alt='profil'/>
        //         </div>
        //         <div className={styles.AboutText}>
        //             <p
        //             style={{fontSize: '21px'}}>
        //                 Développeur FullStack Junior. je suis innovant, créatif, fiable et persévérant,  j’aime penser, designer, concevoir et gérer des produits.  Tant a l'aise dans le travail d'équipe qu'en autonomie je m’adapte facilement et .
        //                 apprends continuellement pour atteindre mes objectifs.
        //             </p>
        //         </div>
        //     </div>
        // </div>
    </div> */}











export default about