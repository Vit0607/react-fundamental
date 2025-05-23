import type { InputHTMLAttributes } from 'react';
import styles from './MyInput.module.scss';

type MyInputProps = InputHTMLAttributes<HTMLInputElement>;

const MyInput = ({ ...props }: MyInputProps) => {
  return <input className={styles.myInput} type="text" {...props} />;
};

export default MyInput;
