import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";

const initialState = [
    {
        id: nanoid(),    //npm i nanoid
        title: "Introduction into Redux/Toolkit",
        content: "Welcome to the Redux Toolkit Quick Start tutorial! This tutorial will briefly introduce you to Redux Toolkit and teach you how to start using it correctly."
    },
    {
        id: nanoid(),    //npm i nanoid
        title: "Create a Redux Store",
        content: "Create a file named src/app/store.js. Import the configureStore API from Redux Toolkit"
    }
]

export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {

    }
})