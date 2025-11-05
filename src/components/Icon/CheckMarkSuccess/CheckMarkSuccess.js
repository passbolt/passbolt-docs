import styles from './CheckMarkSuccess.module.css';

const CheckMarkSuccess = () => {
  return (
    <span className={styles.checkmark}>
      <span className={styles.filler}></span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="lucide lucide-check Checkmark_icon__49JsP"
      >
        <path d="M20 6 9 17l-5-5"></path>
      </svg>
    </span>
  );
};

export default CheckMarkSuccess;
