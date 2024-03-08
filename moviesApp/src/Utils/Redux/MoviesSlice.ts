import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    description: [],
    movieSingle: {}
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState: initialState,
    reducers: {
        storeMovies: (state, action) => {
            state.description = action.payload
        },
        storeSelectedMovie: (state, action) => {
            state.movieSingle = action.payload
        },
        reset: () => initialState
    },
})

export const { storeMovies, storeSelectedMovie } = movieSlice.actions

export default movieSlice.reducer