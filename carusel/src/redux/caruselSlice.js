import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    images: [],
    currentIndex: 0,
    status: 'idle',
    error: null
};

const PEXELS_API_KEY = 'LGGdBOZgBXCaiooJC63DSdKHTDrjfbOfY8WbDT7oCXXtYYyxMP50zzYh';
const PEXELS_API_URL = 'https://api.pexels.com/v1/search?query=nature&per_page=10';

export const fetchImages = createAsyncThunk('carusel/fetchImages', async () => {
    try {
        const response = await axios.get(PEXELS_API_URL, {
            headers: {
                Authorization: PEXELS_API_KEY
            }
        });
        return response.data.photos.map(photo => photo.src.medium);
    } catch (error) {
        throw error.response.data;
    }
});

const caruselSlice = createSlice({
    name: 'carusel',
    initialState,
    reducers: {
        nextImage: (state) => {
            state.currentIndex = (state.currentIndex + 1) % state.images.length;
        },
        prevImage: (state) => {
            state.currentIndex = (state.currentIndex - 1 + state.images.length) % state.images.length;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchImages.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchImages.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.images = action.payload;
            })
            .addCase(fetchImages.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { nextImage, prevImage } = caruselSlice.actions;
export default caruselSlice.reducer;
