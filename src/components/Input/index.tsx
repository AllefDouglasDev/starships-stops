/**
 *
 * StarshipCard Component
 *
 */

import { InputHTMLAttributes } from 'react'
import * as S from './styles'

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
}

export const Input = ({ label, ...props }: InputProps) => (
  <S.Wrapper>
    {label && <S.Label>{label}</S.Label>}
    <S.Input {...props} />
  </S.Wrapper>
)
