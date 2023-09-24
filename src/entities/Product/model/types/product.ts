export interface IProductCard {
    id: number
    image: string
    name: string
    price: number
}

export interface ProductSchema {
    isLoading: boolean
    error?: string | null
    cards: IProductCard[] | []
}
