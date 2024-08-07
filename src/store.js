import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./app/slice/productSlice"

export const store = configureStore({
    reducer: {
        products: productReducer
    }, // Define your reducers here
    // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(/* your middlewares */)
})