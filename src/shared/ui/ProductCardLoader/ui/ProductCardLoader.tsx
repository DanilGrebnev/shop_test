import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'

export const ProductCardLoader = () => {
    return (
        <Box sx={{ width: '100%' }}>
            <Skeleton />
            <Skeleton animation='wave' />
            <Skeleton animation={false} />
        </Box>
    )
}
