import { FC, useEffect, useState } from 'react'
import axios from 'axios'
import { v4 } from 'uuid'

import cn from '@/shared/lib/classnames'
import { ProductCard } from '@/widgets'

import s from './Catalog.module.scss'

interface CatalogProps {
    className?: string
}

export const Catalog: FC<CatalogProps> = (props) => {
    const { className } = props

    const [state, setState] = useState([])

    const getData = async () => {
        const { data } = await axios.get(
            'https://appevent.ru/dev/task1/catalog'
        )
        setState(data.items)
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className={cn(s.Catalog, className)}>
            {state.map((props) => {
                return (
                    <ProductCard
                        key={v4()}
                        {...props}
                    />
                )
            })}
        </div>
    )
}
