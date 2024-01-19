import styles from './Button.module.css';

export default ({text}) => {
  return (
    <>
      <button className={styles.button} type="button">{text}</button>
    </>
  );
};
