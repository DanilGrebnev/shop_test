import '@/app/styles/main.scss'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { ErrorBoundary } from '@/app/providers/ErrorBoundary'
import { StoreProvider } from '@/app/providers/StoreProvider'

import { App } from '../src/app/App.tsx'

const root = ReactDOM.createRoot(document.getElementById('root')!)

root.render(
    <StoreProvider>
        <BrowserRouter>
            <ErrorBoundary>
                <App />
            </ErrorBoundary>
        </BrowserRouter>
    </StoreProvider>,
)
