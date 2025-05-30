import PostItem from '../PostItem/PostItem';
import styles from './PostList.module.scss';

type PostType = {
  id: number;
  title: string;
  body: string;
};

type PostListProps = {
  posts: {
    id: number;
    title: string;
    body: string;
  }[];
  title: string;
  remove: (post: PostType) => void;
};

const PostList = ({ posts, title, remove }: PostListProps) => {
  if (posts.length == 0) {
    return <h1 className={styles.title}>Посты не найдены!</h1>;
  }

  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      {posts.map(post => {
        return <PostItem key={post.id} post={post} remove={remove} />;
      })}
    </>
  );
};

export default PostList;
