import Places from './Places.jsx';
import { useState, useEffect } from 'react';
import Error from './Error.jsx';
import { sortPlacesByDistance } from '../loc.js'
import { fetchAvailablePlaces } from './http.js';

export default function AvailablePlaces({ onSelectPlace }) {

  const [availablePlaces, setAvailablePlaces] = useState([])
  // the state below is to show the user that the data is currently being fetched
  //from the REST API and needs time to render and display on the screen 
  const [isFetching, setIsFetching] = useState(false)
  const [error, setError] = useState()
  //handling the eeor in a React application typically menas that we wannt to 
  //update the UI and show an error message to the user, and that menas that
  // we need a third piece of state, and error state here
  // when fetching data, it's common to have these three pieces of state work 
  // together 


  //'async' and 'await' features are restricted for use within React for pormises
  // and data fetching hence I need to use 'fetch' to connect to the backend
  // REST APIs to retrieve data 

  useEffect(() => {
    async function fetchPlaces() {
      setIsFetching(true)

      try {

        const places = await fetchAvailablePlaces()

        navigator.geolocation.getCurrentPosition((position) => {
          const sortedPlaces = sortPlacesByDistance(
            places,
            position.coords.latitude,
            position.coords.longitude

          )
          setAvailablePlaces(sortedPlaces)
          setIsFetching(false)
        })

      }
      catch (error) {
        setError({ message: error.message || 'try again later' })

        setIsFetching(false)
      }
    }
    fetchPlaces()
  }, [])

  if (error) {
    return <Error title='an error occured' message={error.message} />
  }
  //   fetch('http://localhost:3000/places')
  //     .then((response) => {
  //       return response.json()
  //     })
  //     .then((resData) => {
  //       setAvailablePlaces(resData.places)
  //     })
  // }, [])



  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText='fetching place data'
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}







