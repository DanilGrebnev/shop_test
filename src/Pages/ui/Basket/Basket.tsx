import { FC } from 'react'

import cn from '@/shared/lib/classnames'
import { BasketCard } from '@/widgets'
import { TotalAmount } from '@/widgets'

import s from './Basket.module.scss'
interface BasketProps {
    className?: string
}

const Basket: FC<BasketProps> = (props) => {
    const { className } = props

    return (
        <div className={cn(s.Basket, className)}>
            <div className={s.BasketCardWrapper}>
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
                <BasketCard />
            </div>
            <TotalAmount />
        </div>
    )
}

export default Basket
