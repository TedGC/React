
import { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'



// the reason for using "useCallback" function here is to prevent
// useEffect from running infinitely, which should be referred back to
// one of the courses regarding useCallback function 
export function useThunk(thunk) {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null);
    const dispatch = useDispatch()

    const runThunk = useCallback((arg) => {
        setIsLoading(true);
        dispatch(thunk(arg))
            .unwrap()
            .catch(err => setError(err))
            .finally(() => setIsLoading(false))
    }, [dispatch, thunk])
    return [runThunk, isLoading, error]

}
