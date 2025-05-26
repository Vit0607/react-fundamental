type SortKey = 'title' | 'body';

type MySelectProps = {
  defaultValue: string;
  options: {
    value: SortKey | string;
    name: string;
  }[];
  value: SortKey | string;
  onChange: (arg: SortKey) => void;
};

type SelectEvent = React.ChangeEvent<HTMLSelectElement>;

const MySelect = ({
  defaultValue,
  options,
  value,
  onChange,
  ...props
}: MySelectProps) => {
  const handleChange = (e: SelectEvent) => {
    const selectedValue = e.target.value as SortKey;
    onChange(selectedValue);
  };

  return (
    <select value={value} onChange={handleChange} {...props}>
      <option disabled value="">
        {defaultValue}
      </option>
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default MySelect;
