import { Button, ButtonType } from '@/shared/ui/Button'

import s from './s.module.scss'

export const EmptyInfo = () => {
    return (
        <div className={s.empty}>
            <h1>Корзина пуста</h1>
            <Button
                to={'/'}
                types={ButtonType.BUTTON_LINK}
            >
                Перейти в каталог
            </Button>
        </div>
    )
}
