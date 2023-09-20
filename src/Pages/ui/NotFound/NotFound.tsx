import { FC } from 'react'

import s from './NotFound.module.scss'

interface NotFoundProps {
    className?: string
}

export const NotFound: FC<NotFoundProps> = (props) => {
    const { className } = props

    return <div className={`${s.NotFound} ${className}`}>Page not found</div>
}
