import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const apiKey = 'AIzaSyDGT6-a8mZWTB_4-Ft3-5MmB3rOnCqBFtc';

export const booksApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.googleapis.com/books/v1/' }),
  endpoints: (builder) => ({
    searchBooks: builder.query({
      query: ({ query, categories, sortBy, maxResults,startIndex}) =>
        `volumes?q=${query}&key=${apiKey}&maxResults=${maxResults}&startIndex=${startIndex}&orderBy=${sortBy}&subject=${categories}`,
    }),
    getBookById: builder.query({
      query: (bookId) => `volumes/${bookId}`,
    }),
  }),
});


export const { useSearchBooksQuery,useGetBookByIdQuery } = booksApi;
export default booksApi;
export const {endpoints: {searchBooks}} = booksApi