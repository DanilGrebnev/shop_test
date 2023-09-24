import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

import { getFromLocalStorage } from '@/shared/lib/getFromLocalStorage'
import { setItemInLocalStorage } from '@/shared/lib/setItemInLocalStorage'

import { BasketSchema } from '../types/basketType'
import { BasketVariables } from '../variables'

const localStorageKey = BasketVariables.LOCAL_STORAGE_ITEMS_KEY

const basketItems = getFromLocalStorage(localStorageKey)

const initialState: BasketSchema = {
    items: basketItems || [],
}

export const basketSlice = createSlice({
    name: 'basket',
    initialState,

    reducers: {
        addProductToBasket(state, action) {
            state.items.push(action.payload)
            setItemInLocalStorage(localStorageKey, state.items)
        },

        incrementAmount(state, action: PayloadAction<{ id: number }>) {
            const { id } = action.payload

            state.items.forEach((item) => {
                if (item.id === id) {
                    item.amount++
                    setItemInLocalStorage(localStorageKey, state.items)
                }
            })
        },

        decrementAmount(state, action: PayloadAction<{ id: number }>) {
            const { id } = action.payload

            state.items.forEach((item) => {
                if (item.id === id) {
                    item.amount--

                    // Удаляем элемент, если количество меньше или равно 0
                    if (item.amount <= 0) {
                        state.items = state.items.filter(
                            (item) => item.id !== id,
                        )
                    }

                    setItemInLocalStorage(localStorageKey, state.items)
                }
            })
        },
    },
})

export const { reducer: basketReducer } = basketSlice
export const { actions: basketActions } = basketSlice
