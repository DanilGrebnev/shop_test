import { configureStore } from '@reduxjs/toolkit'

import { counterReducer } from '@/entities/Counter'
import { productReducer } from '@/entities/Product'

import { StateSchema } from './StateSchema'

export const createReduxStore = (initialState?: StateSchema) => {
    return configureStore<StateSchema>({
        reducer: {
            counter: counterReducer,
            product: productReducer,
        },

        preloadedState: initialState,
    })
}
