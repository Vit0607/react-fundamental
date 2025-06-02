import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { useFetching } from '../../hooks/useFetching';
import { getById, getCommentsByPostId } from '../../API/PostService';
import Loader from '../../components/UI/Loader/Loader';
import type { CommentType, PostType } from '../../types/posts';
import styles from './PostIdPage.module.scss';

const PostIdPage = () => {
  const params = useParams();
  const [post, setPost] = useState<PostType | null>(null);
  const [comments, setComments] = useState<CommentType[] | []>([]);

  const [getPostById, isPostLoading, postError] = useFetching(async id => {
    const response = await getById(Number(id));
    setPost(response.data);
  });

  const [getComments, isComLoading, comError] = useFetching(async id => {
    const response = await getCommentsByPostId(Number(id));
    setComments(response.data);
  });

  useEffect(() => {
    getPostById(Number(params.id));
    getComments(Number(params.id));
  }, []);

  console.log('post: ', post);

  return (
    <div className={styles.post}>
      <h1>Вы открыли страницу поста с ID={params.id}</h1>
      {postError && (
        <h2 style={{ color: 'red' }}>
          Ошибка при загрузке поста: {postError}{' '}
        </h2>
      )}
      {isPostLoading ? (
        <Loader />
      ) : post ? (
        <div>
          {post.id}. {post.title}
        </div>
      ) : (
        <div>Данные не найдены</div>
      )}
      <h2>Комментарии</h2>
      {comError && <h3>Ошибка при загрузке комментариев: {comError}</h3>}
      {isComLoading ? (
        <Loader />
      ) : (
        <div>
          {comments.map(comment => (
            <div style={{ marginTop: '15px' }} key={comment.id}>
              <h5>{comment.email}</h5>
              <p>{comment.body}</p>
              <hr></hr>
            </div>
          ))}
        </div>
      )}
      <div></div>
    </div>
  );
};

export default PostIdPage;
