import styled from 'styled-components'

export const CellContainer = styled.div`
  width: 25px;
  height: 25px;
  align-items: center;
  text-align: center;
  background-color: white;
  border: 1px solid black;
  font-weight: bold;
  font-size: 16px;
  user-select: none;
  &.clicked {
    background-color: #83bd39;
  }
  &.same-row-column {
    background-color: #cff578;
  }
`
