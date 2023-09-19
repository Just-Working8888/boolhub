

import './App.css'

import { Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import BooksMorePage from './pages/BooksMorePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Main/>}/>
      <Route path='/booksmore/:id' element={<BooksMorePage/>}/>
    </Routes>
  )
}

export default App
