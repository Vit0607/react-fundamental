import axios from 'axios';
import type { PostType } from '../types/posts';

export const fetchPosts = async (): Promise<PostType[]> => {
  const response = await axios.get<PostType[]>(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return response.data;
};
