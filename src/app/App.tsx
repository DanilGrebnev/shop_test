import '@/app/styles/App.scss'

import { AppRouter } from '@/app/providers/RouterProvider'
import { Header } from '@/widgets'

export const App = () => {
    return (
        <div className='app'>
            <Header />
            <AppRouter />
        </div>
    )
}
