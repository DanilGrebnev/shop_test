export interface BasketSchema {
    items: IBasketCard[]
}

export interface IBasketCard {
    id: number
    image: string
    name: string
    price: number
    amount: number
}
