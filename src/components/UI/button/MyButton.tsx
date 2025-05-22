import styles from './MyButton.module.scss';

type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

type MyButtonProps = {
  children: React.ReactNode;
  disabled: boolean;
  onClick: (e: ButtonEvent) => void;
};

const MyButton = ({ children, ...props }: MyButtonProps) => {
  return (
    <button {...props} className={styles.myBtn}>
      {children}
    </button>
  );
};

export default MyButton;
