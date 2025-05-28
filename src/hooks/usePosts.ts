import { useMemo } from 'react';
import type { PostType, SortKey } from '../types/posts';

export const useSortedPosts = (posts: PostType[], sort: SortKey | '') => {
  const sortedPosts = useMemo(() => {
    console.log('ОТРАБОТАЛА ФУНКЦИЯ СОРТЕТ ПОСТ');
    if (sort) {
      const sortKey = sort;
      return [...posts].sort((a, b) => {
        return a[sortKey].localeCompare(b[sortKey]);
      });
    }
    return posts;
  }, [sort, posts]);

  return sortedPosts;
};

export const usePosts = (
  posts: PostType[],
  sort: SortKey | '',
  query: string
) => {
  const sortedPosts = useSortedPosts(posts, sort);
  const selectedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post: PostType) =>
      post.title.toLowerCase().includes(query)
    );
  }, [posts, sort, query]);

  return selectedAndSearchedPosts;
};
