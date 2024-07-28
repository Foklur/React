import { configureStore } from "@reduxjs/toolkit";
import caruselReducer from "./caruselSlice";

export const store = configureStore({
    reducer: {
        carusel: caruselReducer
    }
})