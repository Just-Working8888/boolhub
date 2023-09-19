import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';


import booksReducer from '../features/books/booksSlice';
import booksApi from '../features/books/booksApi';

const store = configureStore({
  reducer: {
    books: booksReducer,
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware),
});

setupListeners(store.dispatch);

export default store;

