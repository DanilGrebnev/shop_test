import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'

export const getBasketItems = (state: StateSchema) => {
    return state.basket.items
}
