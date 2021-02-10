import { Definitions } from 'core/types'

export type GetAllStarshipsResponse = {
  count: number
  next?: string
  previews?: string
  results: Definitions['Starships'][]
}
