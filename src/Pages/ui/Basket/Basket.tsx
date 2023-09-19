import { FC } from 'react'
import s from './Basket.module.scss'
import cn from '@/shared/lib/classnames'

interface BasketProps {
    className?: string
}

export const Basket: FC<BasketProps> = (props) => {
    const { className } = props

    return <div className={cn(s.Catalog, className)}>Basket</div>
}
