export type PostType = {
  id: number;
  title: string;
  body: string;
};

export type SortKey = 'title' | 'body';

export type FilterType = {
  sort: SortKey | '';
  query: string;
};

export type CommentType = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};
