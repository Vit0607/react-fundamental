import PostItem from '../PostItem/PostItem';

type PostListProps = {
  posts: {
    id: number;
    title: string;
    body: string;
  }[];
  title: string;
};

const PostList = ({ posts, title }: PostListProps) => {
  return (
    <>
      <h1>{title}</h1>
      {posts.map(post => {
        return <PostItem key={post.id} title={post.title} body={post.body} />;
      })}
    </>
  );
};

export default PostList;
