
import { combineReducers } from 'redux';
import booksReducer from '../features/books/booksSlice';

const rootReducer = combineReducers({
  books: booksReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
