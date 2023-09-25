import { configureStore } from '@reduxjs/toolkit'

import { basketReducer } from '@/entities/Basket'
import { catalogReducer } from '@/entities/Catalog'

import { StateSchema } from './StateSchema'

export const store = configureStore<StateSchema>({
    reducer: {
        basket: basketReducer,
        catalog: catalogReducer,
    },
})

export const createReduxStore = () => {
    return store
}
