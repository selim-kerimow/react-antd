import { configureStore } from "@reduxjs/toolkit";
import { cartReducer } from "./cartSlice";



export const store = configureStore({
    reducer: {
        cartSlice: cartReducer,
    }
})


export type RootState = ReturnType<typeof store.getState>