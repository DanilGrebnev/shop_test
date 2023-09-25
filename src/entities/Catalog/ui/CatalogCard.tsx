import { Card } from '@mui/material/'
import { FC, memo } from 'react'

import { Button } from '@/shared/ui/Button'

import { AddToBasketButton } from '..'
import s from './CatalogCard.module.scss'

interface ProductCardProps {
    id: number
    image: string
    name: string
    price: number
}

export const CatalogCard: FC<ProductCardProps> = memo((props) => {
    const { id, image, name, price } = props

    return (
        <Card className={s.Card}>
            <img
                loading='lazy'
                src={image}
                className={s.img}
            />

            <h3>{name}</h3>
            <h4>Цена: {price} ₽</h4>

            <div className={s.buttons}>
                <AddToBasketButton
                    id={id}
                    image={image}
                    name={name}
                    price={price}
                    amount={1}
                />

                <Button variant='outlined'>Подробнее</Button>
            </div>
        </Card>
    )
})
