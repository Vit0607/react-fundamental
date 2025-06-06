import { useState, useEffect } from 'react';
import PostList from '../../components/PostList/PostList';
import PostFilter from '../../components/PostFilter/PostFilter';
import MyModal from '../../components/UI/MyModal/MyModal';
import PostForm from '../../components/PostForm/PostForm';
import MyButton from '../../components/UI/button/MyButton';
import type { PostType, FilterType } from '../../types/posts';
import { usePosts } from '../../hooks/usePosts';
import { fetchPosts } from '../../API/PostService';
import Loader from '../../components/UI/Loader/Loader';
import { useFetching } from '../../hooks/useFetching';
import { getPagesCount } from '../../utils/pages';
import Pagination from '../../components/UI/pagination/Pagination';

function Posts() {
  const [posts, setPosts] = useState<PostType[]>([]);

  const [filter, setFilter] = useState<FilterType>({ sort: '', query: '' });
  const [modal, setModal] = useState<boolean>(false);
  const [limit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState(0);
  const [postsFetching, isPostsLoading, postsError] = useFetching(async () => {
    const response = await fetchPosts(limit, page);
    setPosts(response.data);
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPagesCount(totalCount, limit));
  });
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  useEffect(() => {
    postsFetching(null);
  }, [page]);

  const createPost = (newPost: PostType) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };

  const removePost = (post: PostType) => {
    setPosts(posts.filter(p => p.id !== post.id));
  };

  const changePage = (page: number) => {
    setPage(page);
    postsFetching(null);
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
      {postsError && <h1>Возникла ошибка ${postsError}</h1>}
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
          posts={sortedAndSearchedPosts}
          title="Посты про JS"
        />
      )}
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </>
  );
}

export default Posts;
