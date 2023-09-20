import { FC } from 'react'
import { Card } from '@mui/material/'

import { Button } from '@/shared/ui/Button'

import s from './ProductCard.module.scss'
interface ProductCardProps {
    id: number
    image: string
    name: string
    price: number
}

export const ProductCard: FC<ProductCardProps> = (props) => {
    const { id, image, name, price } = props

    return (
        <Card className={s.Card}>
            <img
                src={image}
                className={s.img}
            />
            <h3>{name}</h3>
            <h4>Цена: {price}</h4>
            <div className={s.buttons}>
                <Button variant="outlined">Добавить в корзину</Button>
                <Button variant="outlined">Подробнее</Button>
            </div>
        </Card>
    )
}
