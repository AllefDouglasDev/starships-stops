/**
 *
 * StarshipCard Component
 *
 */

import { Definitions } from 'core/types'
import { ReactNode, useCallback } from 'react'
import * as S from './styles'

export type StarshipCardProps = {
  starship: Definitions['Starships']
  distance?: number
}

interface FieldsProps {
  name?: string
  moreSpace?: boolean
}

const HOURS_IN_A_YEAR = 8760
const HOURS_IN_A_MONTH = 720
const HOURS_IN_A_WEEK = 168
const HOURS_IN_A_DAY = 24

export const StarshipCard = ({ starship, distance = 1 }: StarshipCardProps) => {
  const { name, MGLT, ...rest } = starship

  function calculateTotalTime() {
    return distance / starship.MGLT
  }

  function getConsumablesTime() {
    const [time, type] = starship.consumables.split(' ')

    if (type.startsWith('y')) {
      return Number(time) * HOURS_IN_A_YEAR
    }
    if (type.startsWith('m')) {
      return Number(time) * HOURS_IN_A_MONTH
    }
    if (type.startsWith('w')) {
      return Number(time) * HOURS_IN_A_WEEK
    }
    if (type.startsWith('d')) {
      return Number(time) * HOURS_IN_A_DAY
    }

    return 1
  }

  function calculateStops() {
    return Math.floor(calculateTotalTime() / getConsumablesTime())
  }

  const renderFields: any = useCallback(
    (object: any, options?: FieldsProps) => {
      if (object instanceof Array && object.length > 0) {
        return (
          <S.SequenceField key={options?.name}>
            <strong>{options?.name}:</strong>
            {object.map((obj) => (
              <span key={`${starship.name}-${options?.name}-${obj}`}>
                {obj}
              </span>
            ))}
          </S.SequenceField>
        )
      }

      return Object.keys(object).map((key) => {
        if (typeof object[key] === 'string')
          return (
            <S.Field key={`${starship.name}-${key}`}>
              <strong>{key}:</strong> {object[key]}
            </S.Field>
          )
        else if (typeof object[key] === 'object')
          return renderFields(object[key], {
            name: key,
            moreSpace: true,
          })
        else return null
      })
    },
    [rest]
  )

  return (
    <S.Wrapper>
      <S.Header>
        <S.Name>{starship.name}</S.Name>

        <S.Distance>MGLT: {starship.MGLT}</S.Distance>
      </S.Header>

      <S.Separator />

      <S.FieldsWrapper>{renderFields(rest)}</S.FieldsWrapper>

      <S.Separator />
      <S.Stops>STOPS: {calculateStops()}</S.Stops>
    </S.Wrapper>
  )
}
