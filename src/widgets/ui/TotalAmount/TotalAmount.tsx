import { FC } from 'react'

import { Button } from '@/shared/ui/Button'

import s from './TotalAmount.module.scss'

interface TotalAmountlProps {
    className?: string
}

export const TotalAmount: FC<TotalAmountlProps> = () => {
    return (
        <div className={s.TotalAmount}>
            <div className={s.title}>Условия заказа</div>
            <div className={s.summarySection}>
                <div className={s.summaryHeader}>
                    <span>Итого</span>
                </div>
                <div className={s.summaryHeaderSum}>1790</div>
            </div>
            <div className={s.ButtonSection}>
                <Button>Перейти к оформлению</Button>
            </div>
        </div>
    )
}
