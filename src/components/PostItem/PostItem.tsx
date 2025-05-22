import styles from './PostItem.module.scss';

const PostItem = ({
  number,
  title,
  body
}: {
  number: number;
  title: string;
  body: string;
}) => {
  return (
    <div className={styles.post}>
      <div className={styles.post__content}>
        <strong>
          {number}. {title}
        </strong>
        <div>{body}</div>
      </div>
      <div className={styles.post__btns}>
        <button>Удалить</button>
      </div>
    </div>
  );
};

export default PostItem;
