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
