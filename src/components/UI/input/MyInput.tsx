import styles from './MyInput.module.scss';

const MyInput = (props: any) => {
  return <input className={styles.myInput} type="text" {...props} />;
};

export default MyInput;
