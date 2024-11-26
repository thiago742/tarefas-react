import styled from 'styled-components'

export const Card = styled.div`
  padding: 8px;
  border: 1px solid #a1a1a1;
  background-color: #fcfcfc;
  color: #5e5e5e;
  border-radius: 8px;
  cursor: pointer;

  &.ativo {
    border-color: #1e90ff;
    background-color: #fff;
    color: #1e90ff;
  }
`

export const Contador = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`

export const Label = styled.span`
  font-size: 14px;
`
