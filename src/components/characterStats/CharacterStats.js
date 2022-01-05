import React from 'react'
import ProgressBar from '../progressBar/ProgressBar'
import styles from './CharacterStats.module.css'
const CharacterStats = ({ sleep, hunger, colonySize }) => {
    return (
        <div className={styles.root}>
            <p>Energy:</p> 
            <ProgressBar percentage={(sleep / 100) * 100} />
            <p>Hunger:</p>
            <ProgressBar percentage={(hunger / 100) * 100} />
            <p><span>Colony Size:</span> {colonySize}</p>
        </div>
    )
}

export default CharacterStats
