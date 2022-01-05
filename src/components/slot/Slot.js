import React from 'react';
import styles from './Slot.module.css';

const Slot = ({ value, onClick, highlightedCard }) => {
    if (!value) {
        return <h1>Skeleton loader</h1>
    }
    return (
        <div onClick={onClick ? () => onClick(value) : null} className={`${styles.root} ${onClick ? styles.clickable : ""} ${highlightedCard ? styles.highlight : ""}`}>
            <p className={styles.text}>{value[value.type]}</p>
            <img className={styles.image} src={value.image} alt={value[value.type]} />
        </div>
    )
}

export default Slot
