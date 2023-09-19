import { FC } from 'react'
import s from './Catalog.module.scss'
import cn from '@/shared/lib/classnames'

interface CatalogProps {
    className?: string
}

export const Catalog: FC<CatalogProps> = (props) => {
    const { className } = props

    return <div className={cn(s.Catalog, className)}>Catalog</div>
}
