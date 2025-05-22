import styles from './MyInput.module.scss';

type InputEvent = React.ChangeEvent<HTMLInputElement>;

type MyInputProps = {
  placeholder: string;
  value: string;
  onChange: (e: InputEvent) => void;
};

const MyInput = ({ placeholder, ...props }: MyInputProps) => {
  return (
    <input
      placeholder={placeholder}
      className={styles.myInput}
      type="text"
      {...props}
    />
  );
};

export default MyInput;
