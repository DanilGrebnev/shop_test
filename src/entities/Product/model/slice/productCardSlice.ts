import { createSlice } from '@reduxjs/toolkit'

import { fetchProduct } from '../services/fetchProduct/fetchProduct'
import { ProductSchema } from '../types/product'

const initialState: ProductSchema = {
    isLoading: true,
    error: null,
    cards: [],
}

export const productSlice = createSlice({
    name: 'product',
    initialState,

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchProduct.fulfilled, (state, action) => {
                console.log(action.payload)
            })
            .addCase(fetchProduct.pending, (state, action) => {})
            .addCase(fetchProduct.rejected, (state, action) => {})
    },
})

export const { actions: productActions } = productSlice
export const { reducer: productReducer } = productSlice
