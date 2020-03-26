import React from 'react';
import styles from './Banner.module.css'
import bannerImage from '../../assets/Images/Banner.jpg';
const banner = props => (
    <div className={styles.Banner}>
        <img src={bannerImage} alt='Logo'/>
    </div>
)

export default banner