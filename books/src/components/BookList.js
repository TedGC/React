import { useContext } from 'react'
import BooksContext from '../context/books'
import BookShow from './BookShow'



function BookList() {
    const { books } = useContext(BooksContext)


    const renderedBooks = books.map((book) => {
        return <BookShow key={book.id} book={book} />
    })



    return <div className='book-list'>

        {renderedBooks}
    </div>


}



export default BookList

/**
 * 
 * Hooks 
 * Definition: functions that add additional features to a component
 * 
 * useState = allows a component to use the state system
 * useEffect = allows a component to run code at specific points in time
 * useContext = allows a component to access values stored in context 
 * 
 * 
 */