/**
 *
 * Starship Service
 *
 */

import { api } from '../api'
import { GetAllStarshipsResponse } from './types'

const endpoints = {
  getStarships: () => 'starships',
}

export function getAll() {
  return api.get<GetAllStarshipsResponse>(endpoints.getStarships())
}
