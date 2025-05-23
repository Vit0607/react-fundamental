import './App.css';
import { useState } from 'react';
import PostList from './components/PostList/PostList';
import PostForm from './components/PostForm/PostForm';

type PostType = {
  id: number;
  title: string;
  body: string;
};

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' }
  ]);

  const createPost = (newPost: PostType) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post: PostType) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <>
      <PostForm create={createPost} />
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="Посты про JS" />
      ) : (
        <h1>Ничего не найдено!</h1>
      )}
    </>
  );
}

export default App;
