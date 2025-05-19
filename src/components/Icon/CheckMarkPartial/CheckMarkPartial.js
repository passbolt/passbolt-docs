import React from 'react';
import styles from './CheckMarkPartial.module.css';

const CheckMarkPartial = () => {
    return (
        <span className={styles.checkmark}>
            <span className={styles.filler}></span>
        </span>
    );
};

export default CheckMarkPartial;
