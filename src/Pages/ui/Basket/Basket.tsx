import { FC } from 'react'
import { useSelector } from 'react-redux'
import { v4 } from 'uuid'

import { getBasketItems } from '@/entities/Basket'
import { BasketCard } from '@/entities/Basket'
import { TotalAmount } from '@/widgets'

import s from './Basket.module.scss'

const Basket: FC = () => {
    const basketItem = useSelector(getBasketItems)

    return (
        <div className={s.Basket}>
            <div className={s.BasketCardWrapper}>
                {basketItem.map((propsCard) => {
                    return (
                        <BasketCard
                            key={v4()}
                            {...propsCard}
                        />
                    )
                })}
            </div>
            <TotalAmount />
        </div>
    )
}

export default Basket
