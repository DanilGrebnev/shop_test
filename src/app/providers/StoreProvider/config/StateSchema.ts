import { BasketSchema } from '@/entities/Basket'
import { CounterSchema } from '@/entities/Counter'
import { ProductSchema } from '@/entities/Product/model/types/product'

export interface StateSchema {
    counter: CounterSchema
    basket: BasketSchema

    // Асинхронные редюсеры
    product: ProductSchema
}
