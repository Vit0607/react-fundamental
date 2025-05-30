import { usePagination } from '../../../hooks/usePagination';
import styles from './Pagination.module.scss';

type PaginationProps = {
  totalPages: number;
  page: number;
  changePage: (arg: number) => void;
};

const Pagination = ({ totalPages, page, changePage }: PaginationProps) => {
  let pagesArray = usePagination(totalPages);
  return (
    <div className={styles.pages__wrapper}>
      {pagesArray.map(p => (
        <span
          onClick={() => changePage(p)}
          className={
            page == p
              ? [styles.page, styles.page__current].join(' ')
              : styles.page
          }
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
