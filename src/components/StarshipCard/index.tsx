/**
 *
 * StarshipCard Component
 *
 */

import { Definitions } from 'core/types'
import * as S from './styles'

export type StarshipCardProps = {
  starship: Definitions['Starships']
  distance?: number
}

export const StarshipCard = ({ starship, distance = 1 }: StarshipCardProps) => (
  <S.Wrapper>
    <S.Header>
      <S.Name>{starship.name}</S.Name>

      <S.Distance>MGLT: {starship.MGLT}</S.Distance>
    </S.Header>

    <S.Stops>STOPS: {Math.ceil(distance / starship.MGLT)}</S.Stops>
  </S.Wrapper>
)
