import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 } from 'uuid'

import { routerConfig } from '@/shared/config/routerConfig'

export const AppRouter = () => {
    return (
        <Suspense fallback='<h1>Загрузка</h1>'>
            <Routes>
                {routerConfig.map(({ element, path }) => {
                    return (
                        <Route
                            key={v4()}
                            path={path}
                            element={
                                <div className='page__wrapper'>{element}</div>
                            }
                        />
                    )
                })}
            </Routes>
        </Suspense>
    )
}
