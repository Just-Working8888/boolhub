import React from 'react';
import { useDispatch } from 'react-redux';
import {  setBooks, setCategory } from '../../features/books/booksSlice';

import { Select } from 'antd';

const CategoryFilter: React.FC = () => {
  const dispatch = useDispatch();
 
  const handleCategoryChange = (newCategory: string) => {
    dispatch(setBooks([]));
    dispatch(setCategory(newCategory));
  };


  return (
    <div>
      <Select
        showSearch
        placeholder="Select a category"
        optionFilterProp="children"
        onChange={handleCategoryChange}
        options={[
          { value: 'all', label: 'All' },
          { value: 'art', label: 'Art' },
          { value: 'biography', label: 'Biography' },
          { value: 'computers', label: 'Computers' },
          { value: 'history', label: 'History' },
          { value: 'medical', label: 'Medical' },
          { value: 'poetry', label: 'Poetry' },
        ]}
      />
    </div>
  );
};

export default CategoryFilter;
