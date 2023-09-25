export interface ICatalogCard {
    id: number
    image: string
    name: string
    price: number
}

export interface CatalogSchema {
    isLoading: boolean
    error?: string | null
    cards: ICatalogCard[] | []
}
