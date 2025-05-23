import PostItem from '../PostItem/PostItem';

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
  return (
    <>
      <h1>{title}</h1>
      {posts.map((post, index) => {
        return (
          <PostItem
            key={post.id}
            number={index + 1}
            post={post}
            remove={remove}
          />
        );
      })}
    </>
  );
};

export default PostList;
