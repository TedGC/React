import { useState } from 'react'
import BookCreate from './components/BookCreate'

function App() {
    const [books, setBooks] = useState([])


    const createBook = (title) => {
        const updateBooks = [
            ...books,

        ]
    }
    return <div>
        <BookCreate onCreate={createBook} />
    </div>

}


export default App; 