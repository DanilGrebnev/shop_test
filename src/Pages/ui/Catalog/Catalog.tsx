import { FC, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { v4 } from 'uuid'

import { useAppDispatch } from '@/app/providers/StoreProvider'
import { getCatalogItems } from '@/entities/Catalog'
import { CatalogCard } from '@/entities/Catalog'
import { fetchCatalog } from '@/entities/Catalog'
import cn from '@/shared/lib/classnames'

import s from './Catalog.module.scss'
import { CatalogLoadingBlock } from './ui/catalogLoadingBlock'

interface CatalogProps {
    className?: string
}

export const Catalog: FC<CatalogProps> = (props) => {
    const { className } = props

    const catalogItems = useSelector(getCatalogItems)

    const dispatch = useAppDispatch()

    const getData = async () => {
        if (catalogItems.length) {
            return
        }

        dispatch(fetchCatalog())
    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className={cn(s.Catalog, className)}>
            <CatalogLoadingBlock />
            {catalogItems?.map((props) => {
                return (
                    <CatalogCard
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
