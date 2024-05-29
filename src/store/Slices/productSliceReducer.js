import { createSlice } from "@reduxjs/toolkit";
import fetchProductAsync from "./fetchProductSliceAsync";

const productSlice = createSlice({
    name: 'product',
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder.addCase(fetchProductAsync.pending, (state)=>{
            state.loading = true;
            state.error = null;
        });
        builder.addCase(fetchProductAsync.fulfilled, (state, action)=>{
            state.loading = false;
            state.products = action.payload;
        });
        builder.addCase(fetchProductAsync.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
})

export default productSlice.reducer;