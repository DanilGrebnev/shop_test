import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { v4 } from 'uuid'

import { useAppDispatch } from '@/app/providers/StoreProvider'
import { ProductCard } from '@/entities/Product'
import { fetchProduct } from '@/entities/Product'
import { getProductItems } from '@/entities/Product/model/selectors/getProductItems/getProductItems'
import cn from '@/shared/lib/classnames'

import s from './Catalog.module.scss'

interface CatalogProps {
    className?: string
}

export const Catalog: FC<CatalogProps> = (props) => {
    const { className } = props

    const productItems = useSelector(getProductItems)

    const dispatch = useAppDispatch()

    const getData = async () => {
        if (productItems.length) {
            return
        }
        dispatch(fetchProduct())
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className={cn(s.Catalog, className)}>
            {productItems?.map((props) => {
                return (
                    <ProductCard
                        key={v4()}
                        id={props?.id}
                        image={props?.image}
                        name={props?.name}
                        price={props?.price}
                    />
                )
            })}
        </div>
    )
}
