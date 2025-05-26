import './App.css';
import { useState, useMemo } from 'react';
import PostList from './components/PostList/PostList';
import PostForm from './components/PostForm/PostForm';
import PostFilter from './components/PostFilter/PostFilter';

type PostType = {
  id: number;
  title: string;
  body: string;
};

type SortKey = 'title' | 'body';

type FilterType = {
  sort: SortKey | '';
  query: string;
};

function App() {
  const [posts, setPosts] = useState<PostType[]>([
    { id: 1, title: 'ввв', body: 'ггг' },
    { id: 2, title: 'ббб', body: 'ддд' },
    { id: 3, title: 'ааа', body: 'жжж' }
  ]);

  const [filter, setFilter] = useState<FilterType>({ sort: '', query: '' });

  const sortedPosts = useMemo(() => {
    console.log('ОТРАБОТАЛА ФУНКЦИЯ СОРТЕТ ПОСТ');
    if (filter.sort) {
      const sortKey = filter.sort;
      return [...posts].sort((a, b) => {
        return a[sortKey].localeCompare(b[sortKey]);
      });
    }
    return posts;
  }, [filter.sort, posts]);

  const selectedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter(post =>
      post.title.toLowerCase().includes(filter.query)
    );
  }, [filter.query, posts]);

  const createPost = (newPost: PostType) => {
    setPosts([...posts, newPost]);
  };

  const removePost = (post: PostType) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <>
      <PostForm create={createPost} />
      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={selectedAndSearchedPosts}
        title="Посты про JS"
      />
    </>
  );
}

export default App;
