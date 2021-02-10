/**
 *
 * Create the store with dynamic reducers
 *
 */

import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { rootReducer } from './reducers'

const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch

export const useAppDispatch = (): AppDispatch => useDispatch<AppDispatch>()

export default store
