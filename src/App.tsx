import './App.css';
import { useState, useEffect } from 'react';
import PostList from './components/PostList/PostList';

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' }
  ]);

  useEffect(() => {
    console.log('Тип постов:', typeof posts);
  }, []);

  return (
    <>
      <PostList posts={posts} title="Посты про JS" />
    </>
  );
}

export default App;
