import './App.css';
import { useState, useRef } from 'react';
import PostList from './components/PostList/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

type ButtonEvent = React.MouseEvent<HTMLButtonElement>;
type InputEvent = React.ChangeEvent<HTMLInputElement>;

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Description' },
    { id: 2, title: 'Javascript 2', body: 'Description' },
    { id: 3, title: 'Javascript 3', body: 'Description' }
  ]);

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addNewPost = (e: ButtonEvent) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      body
    };

    setPosts([...posts, newPost]);
    setTitle('');
    setBody('');
  };

  return (
    <>
      <form>
        <MyInput
          placeholder="Название поста"
          value={title}
          onChange={(e: InputEvent) => setTitle(e.target.value)}
        />
        <MyInput
          placeholder="Описание поста"
          value={body}
          onChange={(e: InputEvent) => setBody(e.target.value)}
        />
        <MyButton disabled={false} onClick={addNewPost}>
          Создать пост
        </MyButton>
      </form>
      <PostList posts={posts} title="Посты про JS" />
    </>
  );
}

export default App;
