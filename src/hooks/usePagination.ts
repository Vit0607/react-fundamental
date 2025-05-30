import { useMemo } from 'react';

export const usePagination = (totalPages: number) => {
  const pagination = useMemo(() => {
    const pagesArray = [];

    for (let i = 0; i < totalPages; i++) {
      pagesArray.push(i + 1);
    }

    return pagesArray;
  }, [totalPages]);

  return pagination;
};
