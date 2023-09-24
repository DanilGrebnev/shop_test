import { FC, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'

import type { productActions } from '@/entities/Product'
import { ProductCard } from '@/entities/Product'
import { fetchProduct } from '@/entities/Product'
import cn from '@/shared/lib/classnames'

import s from './Catalog.module.scss'

interface CatalogProps {
    className?: string
}

export const Catalog: FC<CatalogProps> = (props) => {
    const { className } = props
    const dispatch = useDispatch()

    const getData = async () => {
        dispatch(fetchProduct())
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className={cn(s.Catalog, className)}>
            {/* {state.map((props) => {
                return (
                    <ProductCard
                        key={v4()}
                        {...props}
                    />
                )
            })} */}
        </div>
    )
}
