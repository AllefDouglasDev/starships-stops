import { createAsyncThunk } from '@reduxjs/toolkit'
import { StarshipsService } from 'services'

export const getAllStarships = createAsyncThunk(
  'starships/getAll',
  async () => {
    const response = await StarshipsService.getAll()

    return response.data
  }
)
