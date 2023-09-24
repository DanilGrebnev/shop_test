import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'

export const getProductItems = (state: StateSchema) => {
    return state.product.cards
}
