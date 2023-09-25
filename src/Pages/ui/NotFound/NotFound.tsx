import { FC, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import s from './NotFound.module.scss'

interface NotFoundProps {
    className?: string
}

export const NotFound: FC<NotFoundProps> = (props) => {
    const { className } = props
    const navigate = useNavigate()

    useEffect(() => {
        navigate('/')
    }, [])

    return <div className={`${s.NotFound} ${className}`}>Page not found</div>
}
