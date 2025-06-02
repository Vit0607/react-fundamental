import axios from 'axios';
import type { CommentType, PostType } from '../types/posts';

export const fetchPosts = async (limit: number = 10, page: number = 1) => {
  const response = await axios.get<PostType[]>(
    'https://jsonplaceholder.typicode.com/posts',
    {
      params: {
        _limit: limit,
        _page: page
      }
    }
  );
  return response;
};

export const getById = async (id: number) => {
  const response = await axios.get<PostType>(
    'https://jsonplaceholder.typicode.com/posts/' + id
  );
  return response;
};

export const getCommentsByPostId = async (id: number) => {
  const response = await axios.get<CommentType[]>(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return response;
};
