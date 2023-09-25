import { FC } from 'react'
import { useSelector } from 'react-redux'
import { v4 } from 'uuid'

import { getBasketItems } from '@/entities/Basket'
import { BasketCard } from '@/entities/Basket'
import cn from '@/shared/lib/classnames'
import { TotalAmount } from '@/widgets'

import s from './Basket.module.scss'
import { EmptyInfo } from './ui/EmptyInfo'

const Basket: FC = () => {
    const basketItem = useSelector(getBasketItems)

    const isNotEmptyBasket = !!basketItem.length

    return (
        <div className={cn(s.Basket, { [s.empty]: !isNotEmptyBasket })}>
            {!isNotEmptyBasket && <EmptyInfo />}
            {isNotEmptyBasket && (
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
            )}
            {isNotEmptyBasket && <TotalAmount />}
        </div>
    )
}

export default Basket
