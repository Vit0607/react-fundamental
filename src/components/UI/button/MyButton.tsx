import type { ButtonHTMLAttributes } from 'react';
import styles from './MyButton.module.scss';

type MyButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

const MyButton = ({ children, ...props }: MyButtonProps) => {
  return (
    <button {...props} className={styles.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
