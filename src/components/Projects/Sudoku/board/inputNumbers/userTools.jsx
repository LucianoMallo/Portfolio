import React from 'react'
import { Block, ToolsContainer } from './styles'
import { useDispatch } from 'react-redux'
import { deselectCell } from '../../actions/actions'

function UserTools (props) {
  const numbers = [
    ['1', '2', '3'],
    ['4', '5', '6'],
    ['7', '8', '9', '0']
  ]
  const dispatch = useDispatch()

  const handleOnClick = (number) => {
    props.func(number)
    dispatch(deselectCell())
  }

  return (
    <ToolsContainer className='userTools'>
      {numbers.map((row, rowIndex) => (
        row.map((number, columnIndex) => (
          <Block onClick={() => handleOnClick(number)} key={columnIndex}>{number}</Block>
        ))
      ))}
    </ToolsContainer>
  )
}

export default UserTools
