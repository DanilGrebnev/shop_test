import { FC } from 'react'

import { Button } from '@/shared/ui/Button'

import s from './ErrorPage.module.scss'

export const ErrorPage: FC = () => {
    const pageReload = () => {
        window.location.reload()
    }

    return (
        <div className={s.ErrorPage}>
            <h1>Произошла непредвиденная ошибка...</h1>
            <Button onClick={pageReload}>Обновить страницу</Button>
        </div>
    )
}
