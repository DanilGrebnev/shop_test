import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'

import s from './CurcularProgress.module.scss'

export const CurcularProgress = () => {
    return (
        <Box className={s.progress}>
            <CircularProgress />
        </Box>
    )
}
