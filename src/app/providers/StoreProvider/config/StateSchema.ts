import { CounterSchema } from '@/entities/Counter'
import { ProductSchema } from '@/entities/Product/model/types/product'

export interface StateSchema {
    counter: CounterSchema

    // async reducers
    product: ProductSchema
}
