import { BasketSchema } from '@/entities/Basket'
import { CatalogSchema } from '@/entities/Catalog/model/types/catalog'

export interface StateSchema {
    basket: BasketSchema

    // Асинхронные редюсеры
    catalog: CatalogSchema
}
