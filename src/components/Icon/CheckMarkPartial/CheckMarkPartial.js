import React from 'react';
import styles from './CheckMarkPartial.module.css';

const CheckMarkPartial = () => {
    return (
        <span class={styles.checkmark}>
            <span class={styles.filler}></span>
        </span>
    );
};

export default CheckMarkPartial;
