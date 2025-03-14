import searchBar from "./components/searchBar";

function App() {
    const handleSubmit = (term) => {

    }


    return <div>
        <searchBar onSubmit={handleSubmit} />
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
 */