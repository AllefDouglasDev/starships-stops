/**
 *
 * StarshipList Component
 *
 */

import { StarshipCard } from '../StarshipCard'
import { Definitions } from 'core/types'
import * as S from './styles'

export type StarshipListProps = {
  starships: Definitions['Starships'][]
  distance?: number
}

export const StarshipList = ({
  starships,
  distance = 1,
}: StarshipListProps) => (
  <S.Wrapper>
    {starships.map((starship) => (
      <StarshipCard
        key={starship.name}
        starship={starship}
        distance={distance}
      />
    ))}
  </S.Wrapper>
)
