import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 } from 'uuid'

import { routerConfig } from '@/shared/config/routerConfig'
import { CurcularProgress } from '@/shared/ui/CircularProgress'

export const AppRouter = () => {
    return (
        <Suspense fallback={<CurcularProgress />}>
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
