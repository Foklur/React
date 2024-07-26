import { configureStore } from '@reduxjs/toolkit';
import postsReducer from './appSlices/postsSlice';

export const store = configureStore({
    reducer: {
        posts: postsReducer,
        users: usersReducer
    },
})