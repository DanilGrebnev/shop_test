import { type RouteProps } from 'react-router-dom'

import { Basket, Catalog, NotFound } from '@/pages'

export enum AppRoutes {
    CATALOG = 'catalog',
    BASKET = 'basket',
    NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
    [AppRoutes.CATALOG]: '/',
    [AppRoutes.BASKET]: '/basket',
    [AppRoutes.NOT_FOUND]: '*',
}

export const routerConfig: RouteProps[] = [
    { path: RoutePath.catalog, element: <Catalog /> },
    { path: RoutePath.basket, element: <Basket /> },
    { path: RoutePath.not_found, element: <NotFound /> },
]
