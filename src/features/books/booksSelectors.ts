import { RootState } from "../rootState";


export const selectBooks = (state: RootState) => state.books.books;
export const selectCategories = (state: RootState) => state.books.categories;
export const selectSortBy = (state: RootState) => state.books.sortBy;
