import { AppBar, Box, Toolbar } from '@mui/material'
import { useSelector } from 'react-redux'

import { getBasketItems } from '@/entities/Basket'
import { AppPaths } from '@/shared/config/routerConfig'
import { Button, ButtonType } from '@/shared/ui/Button'

export const Header = () => {
    const basketItems = useSelector(getBasketItems)

    const amountProductsInBasket = new Set(
        basketItems.map((item) => JSON.stringify(item)),
    ).size

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position='static'
                sx={{ borderRadius: '4px' }}
            >
                <Toolbar>
                    <Button
                        to={AppPaths.CATALOG}
                        color='white'
                        variant='text'
                        types={ButtonType.BUTTON_LINK}
                    >
                        Каталог
                    </Button>
                    <Button
                        to={AppPaths.BASKET}
                        color='white'
                        variant='text'
                        badgeContent={amountProductsInBasket}
                        types={ButtonType.BUTTON_LINK}
                    >
                        Корзина
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
