import './App.css';
import { useState, useEffect } from 'react';
import PostList from './components/PostList/PostList';
import PostFilter from './components/PostFilter/PostFilter';
import MyModal from './components/UI/MyModal/MyModal';
import PostForm from './components/PostForm/PostForm';
import MyButton from './components/UI/button/MyButton';
import type { PostType, FilterType } from './types/posts';
import { usePosts } from './hooks/usePosts';
import { fetchPosts } from './API/PostService';
import Loader from './components/UI/Loader/Loader';
import { useFetching } from './hooks/useFetching';

function App() {
  const [posts, setPosts] = useState<PostType[]>([]);

  const [filter, setFilter] = useState<FilterType>({ sort: '', query: '' });
  const [modal, setModal] = useState<boolean>(false);
  const [postsFetching, isPostsLoading, postError] = useFetching(async () => {
    const posts = await fetchPosts();
    setPosts(posts);
  });

  useEffect(() => {
    postsFetching();
  }, []);

  const selectedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost: PostType) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post: PostType) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  return (
    <>
      <MyButton style={{ marginTop: '20px' }} onClick={() => setModal(true)}>
        Добавить пост
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter filter={filter} setFilter={setFilter} />
      {postError && <h1>Возникла ошибка ${postError}</h1>}
      {isPostsLoading ? (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '50px'
          }}
        >
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={selectedAndSearchedPosts}
          title="Посты про JS"
        />
      )}
    </>
  );
}

export default App;
