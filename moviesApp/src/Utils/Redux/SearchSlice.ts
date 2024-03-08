import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchResults: []
}

export const searchSlice = createSlice({
    name: 'searches',
    initialState: initialState,
    reducers: {
        saveSearch: (state, action) => {
            let tempArray: any = state.searchResults;
            tempArray.push(action.payload)
            state.searchResults = tempArray

        },
        clearSearches: () => initialState
    },
})

export const { saveSearch, clearSearches } = searchSlice.actions

export default searchSlice.reducer