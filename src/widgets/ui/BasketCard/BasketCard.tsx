import { FC } from 'react'
import { Card } from '@mui/material'

import s from './BasketCard.module.scss'

interface BasketCardProps {
    className?: string
}

export const BasketCard: FC<BasketCardProps> = () => {
    return (
        <Card className={s.BasketCard}>
            <img src='https://appevent.ru/devtasks/img/catalog_item_1.jpg' />
            <h2 className={s.productName}>Браслет Xiaomi Mi Band 4</h2>
            <div className={s.price}>Цена: {1790}</div>
            <div className={s.amount}> Количество: {1} </div>
        </Card>
    )
}
