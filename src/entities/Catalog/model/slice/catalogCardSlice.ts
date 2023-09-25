import { createSlice } from '@reduxjs/toolkit'

import { fetchCatalog } from '../services/fetchCatalog/fetchCatalog'
import { CatalogSchema } from '../types/catalog'

const initialState: CatalogSchema = {
    isLoading: true,
    error: null,
    cards: [],
}

export const catalogSlice = createSlice({
    name: 'catalog',
    initialState,

    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchCatalog.fulfilled, (state, action) => {
                state.isLoading = false
                state.error = null
                state.cards = action.payload.data.items
            })
            .addCase(fetchCatalog.pending, (state) => {
                state.isLoading = true
            })
            .addCase(fetchCatalog.rejected, (state) => {
                state.isLoading = false
                state.error = 'Ошибка загрузки данных'
            })
    },
})

export const { actions: catalogActions, reducer: catalogReducer } = catalogSlice
