import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../features/rootState';
import { Button, Card } from 'antd';
import Meta from 'antd/es/card/Meta';
import { setBooks, setStartIndex } from '../../features/books/booksSlice';
import { useSearchBooksQuery } from '../../features/books/booksApi';
import { Link } from 'react-router-dom';
interface Book {
  id: string;
  volumeInfo: {
    title: string;
    authors?: string[];
    categories?: string[];
    imageLinks?: {
      thumbnail?: string;
    };
  };
}
const BookList: React.FC = () => {
  const dispatch = useDispatch()



  const { startIndex, books, searchQuery, maxResults } = useSelector((state: RootState) => state.books)
  const selectedCategory = useSelector((state: RootState) => state.books.categories);
  const selectedSortBy = useSelector((state: RootState) => state.books.sortBy);


  const { data, error } = useSearchBooksQuery({
    query: searchQuery,
    categories: selectedCategory,
    sortBy: selectedSortBy,
    maxResults: maxResults,
    startIndex: startIndex
  });




  const loadMoreBooks = () => {
    if (data.items.length) {
      const comaineArrray =  [...books, ...data.items];
      dispatch(setStartIndex(startIndex + 30))
      dispatch(setBooks(comaineArrray))
    }
   
    if (error) {
      console.log(error);
    }
  }


  const allBooks = books.map((book: Book) => (
    <Card
      key={book?.id}
      hoverable
      style={{ width: '24%', overflow: 'hidden' }}
      cover={<img alt="example" src={book.volumeInfo.imageLinks?.thumbnail || 'no-image-available.jpg'} />}
    >
      <Meta title={book.volumeInfo.title} description={book.volumeInfo.authors?.join(', ') || 'Unknown'} />
      <span> {book.volumeInfo.categories?.join(', ') || 'Unknown'}</span>
     <Link to={`/booksmore/${book?.id}`}>
    
      <Button>
        more
      </Button> </Link>
    </Card>
  ))



  return (
    <div className="list">
      {allBooks}
      <br />
      <Button onClick={loadMoreBooks}>
        load more
      </Button>
    </div>
  );
};

export default BookList;
