// import { useState } from 'react'
import { AppBar, Box, Toolbar } from '@mui/material'

import { Button, ButtonType } from '@/shared/ui/Button'

export const Header = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar
                position="static"
                sx={{ borderRadius: '10px' }}
            >
                <Toolbar>
                    <Button
                        to="/"
                        color="white"
                        variant="text"
                        types={ButtonType.BUTTON_LINK}
                    >
                        Каталог
                    </Button>
                    <Button
                        to="/basket"
                        color="white"
                        variant="text"
                        badgeContent={4}
                        types={ButtonType.BUTTON_LINK}
                    >
                        Корзина
                    </Button>
                </Toolbar>
            </AppBar>
        </Box>
    )
}
