import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchCatalog = createAsyncThunk(
    'product/fetchCatalog',
    async () => {
        const response = await axios.get(
            'https://appevent.ru/dev/task1/catalog',
        )

        return response
    },
)
