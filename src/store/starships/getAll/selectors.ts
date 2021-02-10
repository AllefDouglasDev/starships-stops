import { createSelector } from '@reduxjs/toolkit'
import { RootState } from 'store/types'

import { initialState } from './slice'

const selectGetAllStarshipsStateDomain = (state: RootState) =>
  state.starships || initialState

export const selectGetAllStarshipsIsLoading = createSelector(
  selectGetAllStarshipsStateDomain,
  (state) => state.isLoading
)

export const selectGetAllStarshipsError = createSelector(
  selectGetAllStarshipsStateDomain,
  (state) => state.error
)

export const selectGetAllStarships = createSelector(
  selectGetAllStarshipsStateDomain,
  (state) => state.starships
)
