import React from 'react'
import styles from './CharacterStats.module.css'
const CharacterStats = ({ sleep, hunger, colonySize }) => {
    return (
        <div>
            <p><span>Energy:</span>{sleep}</p>
            <p><span>Hunger:</span> {hunger}</p>
            <p><span>colony size:</span> {colonySize}</p>
        </div>
    )
}

export default CharacterStats
