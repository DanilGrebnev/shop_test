import { Card } from '@mui/material'
import { FC } from 'react'

import { Button } from '@/shared/ui/Button'

import s from './TotalAmount.module.scss'
import { SummarySection } from './ui/SummarySection/SummarySection'

interface TotalAmountlProps {
    className?: string
}

export const TotalAmount: FC<TotalAmountlProps> = () => {
    return (
        <Card className={s.TotalAmount}>
            <div className={s.title}>Условия заказа:</div>
            <SummarySection />
            <Button
                size='medium'
                className={s.button}
                variant='text'
            >
                Перейти к оформлению
            </Button>
        </Card>
    )
}
