import styles from './PostItem.module.scss';

const PostItem = ({ title, body }: { title: string; body: string }) => {
  return (
    <div className={styles.post}>
      <div className={styles.post__content}>
        <strong>{title}</strong>
        <div>{body}</div>
      </div>
      <div className={styles.post__btns}>
        <button>Удалить</button>
      </div>
    </div>
  );
};

export default PostItem;
