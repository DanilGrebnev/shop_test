import { useEffect } from 'react'
import axios from 'axios'

import { AppRouter } from '@/app/providers/RouterProvider'
import { Header } from '@/shared/ui/Header'

import '@/app/styles/App.scss'

export const App = () => {
    const getDate = async () => {
        const response = await axios.get(
            'https://appevent.ru/dev/task1/catalog'
        )
        // console.log(response)
    }

    useEffect(() => {
        getDate()
    }, [])

    return (
        <div className="app">
            <Header />
            <AppRouter />
        </div>
    )
}
