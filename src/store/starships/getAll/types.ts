import { SerializedError } from '@reduxjs/toolkit'
import { Definitions } from 'core/types'

export interface GetAllStarshipsState {
  isLoading: boolean
  error?: SerializedError
  starships?: Definitions['Starships'][]
}
