import { configureStore } from '@reduxjs/toolkit'

import { basketReducer } from '@/entities/Basket'
import { counterReducer } from '@/entities/Counter'
import { productReducer } from '@/entities/Product'

import { StateSchema } from './StateSchema'

export const store = configureStore<StateSchema>({
    reducer: {
        counter: counterReducer,
        basket: basketReducer,
        product: productReducer,
    },
})

export const createReduxStore = () => {
    return store
}
