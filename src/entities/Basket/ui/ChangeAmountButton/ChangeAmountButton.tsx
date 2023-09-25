import { FC } from 'react'

import { useAppDispatch } from '@/app/providers/StoreProvider'
import cn from '@/shared/lib/classnames'
import { Button } from '@/shared/ui/Button'

import { basketActions } from '../../model/slice/basketSlice'
import s from './ChangeAmountButton.module.scss'

interface ChangeAmountButtonProps {
    className?: string
    amount: number
    id: number
}

export const ChangeAmountButton: FC<ChangeAmountButtonProps> = (props) => {
    const { amount = 1, id, className } = props

    const dispatch = useAppDispatch()

    const incrementAmount = () => {
        dispatch(basketActions.incrementAmount({ id }))
    }

    const decrementAmount = () => {
        dispatch(basketActions.decrementAmount({ id }))
    }

    return (
        <div className={cn(s.ButtonContainer, className)}>
            <Button
                className={s.dec}
                onClick={decrementAmount}
            >
                -
            </Button>
            {amount}
            <Button
                className={s.inc}
                onClick={incrementAmount}
            >
                +
            </Button>
        </div>
    )
}
