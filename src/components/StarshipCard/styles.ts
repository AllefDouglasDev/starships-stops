import styled from 'styled-components'

export const Wrapper = styled.div`
  width: 300px;
  border-radius: 8px;
  border: 1px solid black;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px;
  border-bottom: 1px solid black;
`

export const Name = styled.h1`
  font-size: 16px;
  font-weight: bold;
`

export const Distance = styled.div`
  font-size: 14px;
  font-weight: bold;
`

export const Stops = styled.div`
  margin: 12px;
  text-align: end;
  font-size: 11px;
  font-weight: 500;
  color: green;
`
