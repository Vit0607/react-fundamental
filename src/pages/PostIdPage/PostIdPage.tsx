import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useFetching } from '../../hooks/useFetching';
import { getById } from '../../API/PostService';
import Loader from '../../components/UI/Loader/Loader';
import type { PostType } from '../../types/posts';
import styles from './PostIdPage.module.scss';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState<PostType | null>(null);

  const [getPostById, isPostLoading, postError] = useFetching(async () => {
    const response = await getById(Number(params.id));
    setPost(response.data);
  });

  useEffect(() => {
    getPostById();
  }, []);

  console.log('post: ', post);

  return (
    <div className={styles.post}>
      <h1>Вы открыли страницу поста с ID={params.id}</h1>
      {postError && <h1>Возникла ошибка {postError} </h1>}
      {isPostLoading ? (
        <Loader />
      ) : post ? (
        <div>
          {post.id}. {post.title}
        </div>
      ) : (
        <div>Данные не найдены</div>
      )}
    </div>
  );
};

export default PostIdPage;
