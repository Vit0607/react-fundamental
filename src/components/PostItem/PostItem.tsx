import styles from './PostItem.module.scss';
import MyButton from '../UI/button/MyButton';

type PostType = {
  id: number;
  title: string;
  body: string;
};

const PostItem = ({
  number,
  remove,
  post
}: {
  number: number;
  post: PostType;
  remove: (post: PostType) => void;
}) => {
  return (
    <div className={styles.post}>
      <div className={styles.post__content}>
        <strong>
          {number}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className={styles.post__btns}>
        <MyButton onClick={() => remove(post)}>Удалить</MyButton>
      </div>
    </div>
  );
};

export default PostItem;
