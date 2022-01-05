import React from 'react'
import styles from './ProgressBar.module.css'
const ProgressBar = ({ percentage }) => {
    console.log("🚀 ~ file: ProgressBar.js ~ line 4 ~ ProgressBar ~ percentage", percentage)
    return (
        <div className={styles.root}>
            <div style={{ height: '20px', width: `${percentage}%`, backgroundColor: 'grey' }}></div>
        </div>
    )
}

export default ProgressBar
