import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getCounterValue } from '../model/selectors/getCounterValue'
import { counterActions } from '../model/slice/counterSlice'
interface CounterProps {
    className?: string
}

export const Counter: FC<CounterProps> = () => {
    const dispatch = useDispatch()

    const counterValue = useSelector(getCounterValue)

    const increment = () => {
        dispatch(counterActions.increment())
    }

    const decrement = () => {
        dispatch(counterActions.decrement())
    }

    return (
        <div>
            <h1>value = {counterValue}</h1>
            <button
                type='button'
                onClick={increment}
            >
                Increment
            </button>
            <button
                type='button'
                onClick={decrement}
            >
                Decrement
            </button>
        </div>
    )
}
