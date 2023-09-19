import {  createSlice,  } from '@reduxjs/toolkit';



const initialState = {
  books: [],
  categories: 'all',
  searchQuery:'',
  sortBy: 'relevance',
  loading: 'idle',
  error: false,
  maxResults: 30,
  startIndex:0
}

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.categories = action.payload;
    },
    setItem: (state, action) => {
      console.log(action);
      
      state.books = action.payload;
    },
    setSortBy: (state, action) => {
      state.sortBy = action.payload;
    },
    setBooks: (state, action) => {
      state.books = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setStartIndex:(state,action)=>{
      state.startIndex = action.payload;
    },
    setSearchQuery: (state, action) => {
      state.searchQuery = action.payload;
    }

    // Другие редюсеры
  },
  
});

export const {
  setCategory,
  setSortBy,
  setBooks,
  setLoading,
  setError,
  setStartIndex,
  setSearchQuery,
  setItem
  /* остальные экшены */
} = booksSlice.actions;

export default booksSlice.reducer;
