import './App.css';
import { useState } from 'react';
import PostList from './components/PostList/PostList';
import PostForm from './components/PostForm/PostForm';
import MySelect from './components/UI/select/MySelect';

type PostType = {
  id: number;
  title: string;
  body: string;
};

type SortKey = 'title' | 'body';

function App() {
  const [posts, setPosts] = useState<PostType[]>([
    { id: 1, title: 'ввв', body: 'ггг' },
    { id: 2, title: 'ббб', body: 'ддд' },
    { id: 3, title: 'ааа', body: 'жжж' }
  ]);

  const [selectedSort, setSelectedSort] = useState<SortKey | ''>('');

  const createPost = (newPost: PostType) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post: PostType) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const sortPosts = (sort: SortKey) => {
    setSelectedSort(sort);
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue="Сортировка"
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' }
        ]}
      />
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title="Посты про JS" />
      ) : (
        <h1>Посты не найдены!</h1>
      )}
    </>
  );
}

export default App;
