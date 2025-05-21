import styles from './MyButton.module.scss';

type MyButtonProps = {
  children: React.ReactNode;
  disabled: boolean;
};

const MyButton = ({ children, ...props }: MyButtonProps) => {
  return (
    <button {...props} className={styles.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
