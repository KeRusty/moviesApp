import { configureStore } from '@reduxjs/toolkit'

// Reducers
import movieReducer from './MoviesSlice'
import searchReducer from './SearchSlice'

export default configureStore({
    reducer: {
        movies: movieReducer,
        searches: searchReducer
    },
})