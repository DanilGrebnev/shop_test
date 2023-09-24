import { useSelector } from 'react-redux'

import { getBasketItems } from '@/entities/Basket'

import s from './SummarySection.module.scss'

export const SummarySection = () => {
    const basketItems = useSelector(getBasketItems)

    const totalSum = basketItems.reduce((total, elem) => {
        return (total += elem.price * elem.amount)
    }, 0)

    return (
        <div className={s.summarySection}>
            <span>Итого</span>
            <span className={s.summaryHeaderSum}>{totalSum}</span>
        </div>
    )
}
