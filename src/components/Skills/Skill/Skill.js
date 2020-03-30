import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import ChangingProgressProvider from './ChangingProgressProvider'
import 'react-circular-progressbar/dist/styles.css';
import styles from './Skill.module.css';





const skill = props => {
    const percentage = props.percentage
    return (
    <li className={styles.Skill}>
        <ChangingProgressProvider values={[0, percentage]}>
        {percentage => (
          <CircularProgressbar
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              pathTransitionDuration: 2
            })}
          />
        )}
      </ChangingProgressProvider>
    </li>
) 
        }
export default skill