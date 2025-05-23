import MyInput from '../UI/input/MyInput';
import MyButton from '../UI/button/MyButton';
import { useState } from 'react';

type InputEvent = React.ChangeEvent<HTMLInputElement>;
type ButtonEvent = React.MouseEvent<HTMLButtonElement>;

type PostType = {
  id: number;
  title: string;
  body: string;
};

type cbCreateProps = {
  create: (newPost: PostType) => void;
};

const PostForm = ({ create }: cbCreateProps) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e: ButtonEvent) => {
    e.preventDefault();
    const newPost = {
      ...post,
      id: Date.now()
    };
    create(newPost);
    setPost({ title: '', body: '' });
  };

  return (
    <form>
      <MyInput
        placeholder="Название поста"
        value={post.title}
        onChange={(e: InputEvent) =>
          setPost({ ...post, title: e.target.value })
        }
      />
      <MyInput
        placeholder="Описание поста"
        value={post.body}
        onChange={(e: InputEvent) => setPost({ ...post, body: e.target.value })}
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;
