import { AppRouter } from '@/app/providers/RouterProvider'
import { Header } from '@/shared/ui/Header'

import '@/app/styles/App.scss'

export const App = () => {
    return (
        <div className="app">
            <Header />
            <AppRouter />
        </div>
    )
}
