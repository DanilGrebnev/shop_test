import { FC } from 'react'

import cn from '@/shared/lib/classnames'

import s from './Catalog.module.scss'

interface CatalogProps {
    className?: string
}

export const Catalog: FC<CatalogProps> = (props) => {
    const { className } = props

    return <div className={cn(s.Catalog, className)}>Catalog</div>
}
