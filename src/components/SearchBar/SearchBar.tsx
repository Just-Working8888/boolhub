import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setBooks, setCategory, setItem, setSearchQuery, setSortBy, setStartIndex } from '../../features/books/booksSlice';
import { RootState } from '../../features/rootState';
import { useSearchBooksQuery } from '../../features/books/booksApi';
import { Button, Col, Input, Statistic } from 'antd';




const SearchBar: React.FC = () => {
  const dispatch = useDispatch();

  const { startIndex, searchQuery } = useSelector((state: RootState) => state.books)
  const selectedCategory = useSelector((state: RootState) => state.books.categories);
  const selectedSortBy = useSelector((state: RootState) => state.books.sortBy);




  const { data, error } = useSearchBooksQuery({
    query: searchQuery,
    categories: selectedCategory,
    sortBy: selectedSortBy,
    maxResults: 30,
    startIndex: startIndex
  });



  const loadMoreBooks = () => {
    if (data.items.length) {
      dispatch(setStartIndex(startIndex + 30))
      dispatch(setBooks(data.items));
    }
    if (error) {
      console.log(error);
    }
  }

  const handleSearch = (event: React.FormEvent) => {
    event.preventDefault();
    dispatch(setItem([]))
    dispatch(setStartIndex(0))
    dispatch(setCategory(selectedCategory));
    dispatch(setSortBy(selectedSortBy));
    if (data) {
      setTimeout(() => loadMoreBooks(), 500);
    } else if (error) {
      console.error('Ошибка поискового запроса:', error);
    }
  };

  return (
    <form onSubmit={handleSearch} style={{ padding: "0 20%" }}>
      <Col style={{ margin: "0 auto" }} span={12}>
        <Statistic title="total items" value={data?.totalItems} precision={2} />
      </Col>
      <br />
      <Input placeholder="Search books..."
        value={searchQuery}

        onChange={(e) => dispatch(setSearchQuery(e.target.value))} type="text" />
      <button type='submit'>
        <Button style={{ marginTop: 16 }} type="primary">
          search
        </Button>
      </button>
    </form>
  );
};

export default SearchBar;
