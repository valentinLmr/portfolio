import React from 'react';
import styles from './About.module.css';
import profil from '../../assets/Images/valou.jpg'

const about = () => {
    return (
        <div className={styles.About}>         
            <h2 >About</h2>         
            <div className={styles.InsideAbout}>
                <div 
                className={styles.AboutPhoto}>
                    <img src={profil} alt='profil'/>
                </div>
                <div className={styles.AboutText}>
                    <p
                    style={{fontSize: '21px'}}>
                        Développeur FullStack Junior. je suis innovant, créatif, fiable et persévérant,  j’aime penser, designer, concevoir et gérer des produits.  Tant a l'aise dans le travail d'équipe qu'en autonomie je m’adapte facilement et .
                        apprends continuellement pour atteindre mes objectifs.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default about