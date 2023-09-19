
import { Card } from 'antd'
import '../App.css'
import NavBar from '../components/NavBar'
import Status from '../components/status/Status'
import SearchBar from '../components/SearchBar/SearchBar'
import CategoryFilter from '../components/CategoryFilter/CategoryFilter'
import SortSelect from '../components/SortSelect/SortSelect'
import BookList from '../components/bookList/BookList'

function Main() {
  return (
    <>
      <NavBar />
      <br />
      <div className="App">
        <Card>
          <Status />


          <SearchBar />
          <br />
          <div className="flex flex-c">
            <CategoryFilter />
            <SortSelect />
          </div>
          <br />
        </Card>
        <br />

        <BookList />

      </div>
    </>
  )
}

export default Main
