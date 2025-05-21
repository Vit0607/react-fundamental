import './App.css';
import { useState, useEffect } from 'react';
import PostList from './components/PostList/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

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
      <form>
        <MyInput type="text" placeholder="Название поста" />
        <MyInput type="text" placeholder="Описание поста поста" />
        <MyButton disabled>Создать пост</MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS" />
    </>
  );
}

export default App;
