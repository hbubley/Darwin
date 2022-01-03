import React from 'react'
import styles from './Button.module.css'
const Button = ({ onClick, variant, label, size }) => {
    return (
        <button className={`${styles[variant]} ${styles[size]}`} onClick={onClick}>{label}</button>
    )
}

export default Button
