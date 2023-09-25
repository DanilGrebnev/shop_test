import { Card } from '@mui/material'
import { FC, useRef } from 'react'

import { IBasketCard } from '../../model/types/basketType'
import { ChangeAmountButton } from '../ChangeAmountButton/ChangeAmountButton'
import { DeleteItemButton } from '../DeleteEItemButton/DeleteItemButton'
import s from './BasketCard.module.scss'

interface BasketCardProps extends IBasketCard {
    className?: string
}

export const BasketCard: FC<BasketCardProps> = (props) => {
    const { id, image, name, price, amount } = props

    const refId = useRef(id)

    return (
        <Card className={s.BasketCard}>
            <img
                loading='lazy'
                src={image}
            />

            <DeleteItemButton id={refId.current} />

            <h2 className={s.productName}>{name}</h2>
            <div className={s.price}>Цена: {price} ₽</div>
            <div className={s.amount}> Количество: {amount} </div>

            <ChangeAmountButton
                id={id}
                amount={amount}
                className={s.changeAmountBtn}
            />
        </Card>
    )
}
