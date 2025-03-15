import {useState} from 'react'
import searchBar from "./components/searchBar";
import imageList from './components/imageList'
import searchImages from './api';


function App() {

    const [images, setImages] = useState([])
    const handleSubmit = async (term) => {
       const result =  await searchImages(term)

       setImages(result)
    }


    return <div>
        <searchBar onSubmit={handleSubmit} />
        <imageList images={images}/>
    </div>
}

export default App;









/**
 * 
 * facts of this app
 * 
 * 1. The searchBar component contains the text input a user will type into
 * 2. the user pressing 'enter' key in the text input means we need to do a search
 * 3. we have a function that will turn a search term into an array of image objects
 * 4. the array of image objects need to get into the imageList component 
 * 
 
 */
