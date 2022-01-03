import React from 'react';
import styles from './Slot.module.css';

const Slot = ({ value }) => {
    if(!value){
        return <h1>Skeleton loader</h1>
    }
    return (
        <div className={styles.root}>
            <h1>{value[value.type]}</h1>
        </div>
    )
}

export default Slot
