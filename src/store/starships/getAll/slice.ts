import { createSlice } from '@reduxjs/toolkit'

import { getAllStarships } from './thunk'
import { GetAllStarshipsState } from './types'

export const initialState: GetAllStarshipsState = {
  isLoading: false,
  error: undefined,
  starships: [],
}

const slice = createSlice({
  name: 'starships/getAll',
  initialState,
  reducers: {},
  extraReducers: ({ addCase }) => {
    addCase(getAllStarships.pending, (state) => {
      state.isLoading = true
      state.error = undefined
      state.starships = []
    })
    addCase(getAllStarships.fulfilled, (state, action) => {
      state.isLoading = false
      state.starships = action.payload.results
    })
    addCase(getAllStarships.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.error
    })
  },
})

export default slice.reducer
