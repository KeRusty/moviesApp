import { configureStore } from '@reduxjs/toolkit'

// Reducers
// import userReducer from './UserSlice';
// import gameReducer from './GameSlice';
// import languageReducer from './LanguageSlice';

export default configureStore({
    reducer: {
        // movie: userReducer,
        // game: gameReducer,
        // language: languageReducer
    },
})