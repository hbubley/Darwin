import React from 'react';
import Slot from '../slot/Slot';
import styles from './Slots.module.css';
const Slots = ({ array, onClick, highlightedCard }) => {
    return (
        <div className={styles.root}>
            {
                array?.map((slot, index) =>
                    <Slot key={index} value={slot} onClick={onClick} highlightedCard={highlightedCard && slot[slot.type] === highlightedCard[highlightedCard?.type]} />
                )
            }
        </div>
    )
}

export default Slots
