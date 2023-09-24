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
                state.isLoading = false
                state.error = null
                state.cards = action.payload.data.items
            })
            .addCase(fetchProduct.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchProduct.rejected, (state) => {
                state.isLoading = false
                state.error = 'Ошибка загрузки данных'
            })
    },
})

export const { actions: productActions } = productSlice
export const { reducer: productReducer } = productSlice
