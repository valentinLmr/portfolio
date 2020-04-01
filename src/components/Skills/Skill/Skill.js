// import React from 'react';
// import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
// import ChangingProgressProvider from './ChangingProgressProvider'
// import 'react-circular-progressbar/dist/styles.css';
// import styles from './Skill.module.css';

import React from 'react';
import style from '../Competence.module.css'



const skill = props => {
    const percentage = props.percentage - 10 ;
    const styles = {
        width:`${percentage}`
    }
    return (


          <div className={style.ContainerComp}>
              <div className={style.NameComp}>
                  <p>{props.name}</p>
              </div>
              <div className={style.PercentageComp} style={styles}>
                  
              </div>
              <div className={style.RestPercentage}>
              <p><i>{props.percentage}</i></p>
              </div>
      
          </div>





    // <li className={styles.Skill}>
    //     <ChangingProgressProvider values={[0, percentage]}>
    //     {percentage => (
    //       <CircularProgressbar
    //         value={percentage}
    //         text={`${percentage}%`}
    //         styles={buildStyles({
    //           pathTransitionDuration: 2
    //         })}
    //       />
    //     )}
    //   </ChangingProgressProvider>
    //       <p>{props.name}</p>
    // </li>
) 
        }
export default skill