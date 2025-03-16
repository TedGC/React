import { useEffect, useContext } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import BooksContext from './context/books'


function App() {

    const { fetchBooks } = useContext(BooksContext)

    useEffect(() => {
        fetchBooks();
    }, [])

    return <div className='app'>
        <h1> Reading List </h1>
        <BookList />
        <BookCreate />

    </div>

}


export default App;



/**
 * 
 * some commnets with regard to making a json servver
 * 
 * 
 * Standalone API client
 * 
 * 1. program used to make requests to an API server, specifically for development/test
 * 2. there are many free API clients 
 * 
 * 
 * 
 * useEffect
 * need to go back to watch the video again as to what actually caused the applciation
 * to re-render multiple times and thus we have to use useEffect to set a standard
 * for when to initiate this re-rendering at certain times 
 * 
 * 1. used to run code when a component is initially rendered and (sometimeS 
 * ) when it is rerendered
 * 2. first argument is a function that contains code we want to run
 * 3. second is an array or nothing -- this controls whether the function is executed 
 * on rerenders 
 * 
 * 
 * CONTEXT
 * 1. contet is not a replacement for Props 
 * 2. context is not a replacement for Redux 
 * 3. context by itself is a communication channel. It doesn't really care what
 * data you are sharing or how that data is orgawznied 
 * 4. Redux is all about organiztion of data. Redux is centralized state store
 * 
 * 
 * To use Context
 * 1. we have to import {createContext} from 'react'
 * 2. and create a const with a function of "createContext()"
 * 3. Context has two objects: 1) provider 2) consumer
 * 1) component used to specify what data we want to share with the rest of the app
 * 2) component used to get access to data (not often used)
 *      it looks liks this == <BooksContext.Provider /> 
 * 4. specify the data that will be shared 
 *  -- 'value' prop is super special. This is what will be shared with rest of app
 *  --
 * 5. consume the data 
 *  --  
 * 
 * 
 */