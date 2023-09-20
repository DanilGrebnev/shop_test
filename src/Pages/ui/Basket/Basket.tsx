import { FC } from 'react'

import cn from '@/shared/lib/classnames'

import s from './Basket.module.scss'

interface BasketProps {
    className?: string
}

const Basket: FC<BasketProps> = (props) => {
    const { className } = props

    return <div className={cn(s.Catalog, className)}>Basket</div>
}

export default Basket
