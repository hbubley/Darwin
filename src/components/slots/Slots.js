import React from 'react';
import Slot from '../slot/Slot';
import styles from './Slots.module.css';
const Slots = ({array}) => {
    return (
        <div className={styles.root}>
            {
                array?.map((slot) =>
                    <Slot value={slot} />
                )
            }
        </div>
    )
}

export default Slots
