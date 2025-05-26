import MyInput from '../UI/input/MyInput';
import MySelect from '../UI/select/MySelect';

type SortKey = 'title' | 'body';

type FilterType = {
  sort: SortKey | '';
  query: string;
};

type PostFilterProps = {
  filter: FilterType;
  setFilter: (arg: FilterType) => void;
};

const PostFilter = ({ filter, setFilter }: PostFilterProps) => {
  return (
    <>
      <MyInput
        value={filter.query}
        onChange={e => setFilter({ ...filter, query: e.target.value })}
        placeholder="Поиск..."
      />
      <MySelect
        value={filter.sort}
        onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
        defaultValue="Сортировка"
        options={[
          { value: 'title', name: 'По названию' },
          { value: 'body', name: 'По описанию' }
        ]}
      />
    </>
  );
};

export default PostFilter;
