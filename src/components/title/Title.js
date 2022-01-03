import React from 'react'
import styles from './Title.module.css'
const Title = ({label}) => {
    return (
            <h1 className={styles.title}>{label}</h1>
    )
}

export default Title
