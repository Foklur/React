import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const initialState = [];

const blogSlice = createSlice({
    name: 'blog',
    initialState,
    reducers: {
        addPost: {
            reducer: (state, action) => {
                state.push(action.payload);
            },
            prepare: (title, author, content) => {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        author,
                        content,
                        date: new Date().toISOString(),
                    },
                };
            },
        },
        updatePost: (state, action) => {
            const { id, title, author, content } = action.payload;
            const existingPost = state.find((post) => post.id === id);
            if (existingPost) {
                existingPost.title = title;
                existingPost.author = author;
                existingPost.content = content;
                existingPost.date = new Date().toISOString();
            }
        },
        deletePost: (state, action) => {
            return state.filter((post) => post.id !== action.payload);
        },
    },
});

export const { addPost, updatePost, deletePost } = blogSlice.actions;

export default blogSlice.reducer;
