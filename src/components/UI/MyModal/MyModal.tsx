import type { Dispatch, ReactNode, SetStateAction } from 'react';
import styles from './MyModal.module.scss';

type MyModalProps = {
  children: ReactNode;
  visible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const MyModal = ({ children, visible, setVisible }: MyModalProps) => {
  const classes = [styles.myModal];

  if (visible) {
    classes.push(styles.active);
  }

  return (
    <div className={classes.join(' ')} onClick={() => setVisible(false)}>
      <div className={styles.myModalContent} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default MyModal;
