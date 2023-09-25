import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'

export const getCatalogItems = (state: StateSchema) => {
    return state.catalog.cards
}
