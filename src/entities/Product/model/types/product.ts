export interface IProductCard {
    id: string
    image: string
    name: string
    price: number
}

export interface ProductSchema {
    isLoading: boolean
    error?: string | null
    cards: IProductCard[] | []
}
