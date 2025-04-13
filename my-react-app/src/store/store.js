import{configureStore} from '@reduxjs/toolkit'
import logsReducer from '../features/logs/logsSlice'

export const store =configureStore({
    reducer: {
        logs: logsReducer,
    }
})