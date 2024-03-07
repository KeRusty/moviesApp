import { configureStore } from '@reduxjs/toolkit'

// Reducers
import movieReducer from './MoviesSlice'

export default configureStore({
    reducer: {
        movies: movieReducer
    },
})