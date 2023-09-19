import React from 'react';
import { useDispatch } from 'react-redux';
import { setBooks, setSortBy } from '../../features/books/booksSlice';
import { Select } from 'antd';

const SortSelect: React.FC = () => {
  const dispatch = useDispatch();

  const handleSortChange = (newSort: string) => {
    dispatch(setBooks([]))
    dispatch(setSortBy(newSort));

  };

  return (
    <div>
      <Select
        showSearch
        placeholder="Sort"
        optionFilterProp="children"
        onChange={handleSortChange}
        options={[
          { value: 'relevance', label: 'Relevance' },
          { value: 'newest', label: 'Newest' }
        ]}
      />
    </div>
  );
};

export default SortSelect;
