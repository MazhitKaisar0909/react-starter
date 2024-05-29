import { createAsyncThunk } from "@reduxjs/toolkit";
const fetchProductAsync = createAsyncThunk('products/fetchProduct', async()=>{
    try {

        const response = await fetch('https://fakestoreapi.com/products')
        if (!response.ok) {
            return response.json();
        }
        return response.json();

    } catch (error) {
        return error
    }
    
});

export default fetchProductAsync;