import React from 'react';
import Slot from '../slot/Slot';
import styles from './Slots.module.css';
const Slots = ({ array, onClick }) => {
    return (
        <div className={styles.root}>
            {
                array?.map((slot, index) =>
                    <Slot key={index} value={slot} onClick={onClick} />
                )
            }
        </div>
    )
}

export default Slots
