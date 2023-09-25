import { FC, memo, useCallback } from 'react'

import { useAppDispatch } from '@/app/providers/StoreProvider'
import basketIcon from '@/shared/assets/icons/basket-icon.svg'
import cn from '@/shared/lib/classnames'
import { Button } from '@/shared/ui/Button'

import { basketActions } from '../../model/slice/basketSlice'
import s from './DeleteItemButton.module.scss'

interface DeleteItemButtonProps {
    className?: string
    id: number
}

export const DeleteItemButton: FC<DeleteItemButtonProps> = memo((props) => {
    const { className, id } = props
    const dispatch = useAppDispatch()

    const deleteItemFromBasket = useCallback(() => {
        dispatch(basketActions.deleteProductFromBasket({ id }))
    }, [id])

    return (
        <Button
            variant='text'
            onClick={deleteItemFromBasket}
            className={cn(s.DeleteItemButton, className)}
        >
            <img src={basketIcon} />
        </Button>
    )
})
