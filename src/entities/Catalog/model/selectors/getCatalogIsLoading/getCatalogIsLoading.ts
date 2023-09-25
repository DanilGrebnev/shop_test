import { StateSchema } from '@/app/providers/StoreProvider/config/StateSchema'

export const getCatalogIsLoading = (state: StateSchema) => {
    return state.catalog.isLoading
}
