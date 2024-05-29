import logger from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";
import productSliceReducer from "./Slices/productSliceReducer";

const store = configureStore({
    reducer:{
        products: productSliceReducer
    },
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(logger)
})

export default store