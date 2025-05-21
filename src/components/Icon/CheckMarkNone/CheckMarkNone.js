import React from 'react';
import styles from './CheckMarkNone.module.css';

const CheckMarkNone = () => {
    return (
        <span className={styles.checkmark}>
            <span className={styles.filler}></span>
            <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5v14"></path>
            </svg>
        </span>
    );
};

export default CheckMarkNone;
