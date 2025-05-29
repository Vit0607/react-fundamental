import { useState } from 'react';

export const useFetching = (
  callback: () => Promise<unknown>
): [() => Promise<void>, boolean, string] => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  const fetching = async () => {
    try {
      setIsLoading(true);
      await callback();
    } catch (e) {
      if (e instanceof Error) {
        setError(e.message);
      } else if (typeof e == 'string') {
        setError(e);
      } else {
        setError('An unknown error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  return [fetching, isLoading, error];
};
