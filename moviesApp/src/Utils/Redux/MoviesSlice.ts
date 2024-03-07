import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    description: []
}

export const movieSlice = createSlice({
    name: 'movies',
    initialState: initialState,
    reducers: {
        storeMovies: (state, action) => {
            state.description = action.payload
        },
        reset: () => initialState
    },
})

export const { storeMovies } = movieSlice.actions

export default movieSlice.reducer