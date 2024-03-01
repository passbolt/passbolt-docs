import React from 'react';
import styles from './CheckMarkSuccess.module.css';

const CheckMarkSuccess = () => {
    return (
        <span class={styles.checkmark}>
            <span class={styles.filler}></span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check Checkmark_icon__49JsP"><path d="M20 6 9 17l-5-5"></path></svg>
        </span>
    );
};

export default CheckMarkSuccess;
