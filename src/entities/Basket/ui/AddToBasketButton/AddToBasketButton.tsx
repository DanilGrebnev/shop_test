import { type FC } from 'react'
import { useSelector } from 'react-redux'

import { useAppDispatch } from '@/app/providers/StoreProvider'
import { AppPaths } from '@/shared/config/routerConfig'
import { Button, ButtonType } from '@/shared/ui/Button'

import { getBasketItems } from '../../model/selectors/getBasketItems/getItems'
import { basketActions } from '../../model/slice/basketSlice'
import { IBasketCard } from '../../model/types/basketType'

interface BasketCardProps extends IBasketCard {
    disabled?: boolean
}

export const AddToBasketButton: FC<BasketCardProps> = (props) => {
    const { id, price, image, name } = props

    const dispatch = useAppDispatch()

    const basketItems = useSelector(getBasketItems)

    const inBasket = basketItems?.some((el) => el.id === id)

    const addToBasket = () => {
        dispatch(
            basketActions.addProductToBasket({
                id,
                price,
                image,
                name,
                amount: 1,
            }),
        )
    }

    const button = inBasket ? (
        <Button
            variant='text'
            to={AppPaths.BASKET}
            types={ButtonType.BUTTON_LINK}
            style={{ background: 'green', color: 'white' }}
        >
            Оформить заказ
        </Button>
    ) : (
        <Button onClick={addToBasket}>Добавить в корзину</Button>
    )

    return button
}
