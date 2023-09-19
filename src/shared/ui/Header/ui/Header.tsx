import { FC } from 'react'
import s from './HeaderProps.module.scss'

interface HeaderProps {
    className: string
}

export const Header: FC<HeaderProps> = (props) => {
    const { className } = props
    
    return <div className={`${s.HeaderProps} ${className}`}></div>
}
