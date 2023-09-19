import { Route, Routes } from 'react-router-dom'
import React, { Suspense } from 'react'
import { routerConfig } from '@/shared/config/routerConfig'
import { v4 } from 'uuid'

export const AppRouter = () => {
    return (
        <Suspense fallback="<h1>Загрузка</h1>">
            <Routes>
                {routerConfig.map(({ element, path }) => {
                    return (
                        <React.Fragment key={v4()}>
                            <Route
                                path={path}
                                element={element}
                            />
                        </React.Fragment>
                    )
                })}
            </Routes>
        </Suspense>
    )
}
