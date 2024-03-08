import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    searchResults: [],
    searchQuick: ''
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
        quickSearchResult: (state, action) => {
            state.searchQuick = action.payload
        },
        clearSearches: () => initialState
    },
})

export const { saveSearch, clearSearches, quickSearchResult } = searchSlice.actions

export default searchSlice.reducer