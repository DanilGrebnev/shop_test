import '@/app/styles/App.scss'
import { AppRouter } from '@/app/providers/RouterProvider'
import { NavLink } from 'react-router-dom'

export const App = () => {
    return (
        <div className="App">
            <header>
                <NavLink to="/">Каталог</NavLink>
                <NavLink to="/basket">Корзина</NavLink>
            </header>
            <AppRouter />
        </div>
    )
}
