import { useDispatch } from 'react-redux'

import { store } from '../config/store'

export type AppDispatch = typeof store.dispatch

export const useAppDispatch: () => AppDispatch = useDispatch
