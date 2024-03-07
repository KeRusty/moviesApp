import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchResults: []
}

export const searchSlice = createSlice({
    name: 'movies',
    initialState: initialState,
    reducers: {
        saveSearch: (state, action) => {
            // state.searchResults = action.payload
            let tempArray: any = state.searchResults;
            tempArray.push(action.payload)
            state.searchResults = tempArray
            // console.log(action.payload, 'load')
            console.log(tempArray, 'tempArray')

        },
        reset: () => initialState
    },
})

export const { saveSearch } = searchSlice.actions

export default searchSlice.reducer