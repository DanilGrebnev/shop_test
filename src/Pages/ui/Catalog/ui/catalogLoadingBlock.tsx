import Box from '@mui/material/Box'
import Skeleton from '@mui/material/Skeleton'
import { useSelector } from 'react-redux'
import { v4 } from 'uuid'

import { getCatalogIsLoading } from '@/entities/Catalog'

export const CatalogLoadingBlock = () => {
    const isLoading = useSelector(getCatalogIsLoading)

    const block = [...Array.from(Array(10))].map(() => {
        return (
            <Box key={v4()}>
                <Skeleton
                    variant='rectangular'
                    width={210}
                    height={118}
                />
                <Skeleton />
                <Skeleton animation='wave' />
                <Skeleton animation={false} />
            </Box>
        )
    })

    return isLoading && block
}
