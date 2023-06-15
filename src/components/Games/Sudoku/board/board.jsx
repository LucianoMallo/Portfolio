import React from 'react'
import { BoardContainer, BoardWrapper, WinPanel } from './styles'
import { Cell } from './cell/cell'
import UserTools from './inputNumbers/userTools'
import { useSelector } from 'react-redux'
import { dataSolved } from '../data/dataSolved.js'
import { empty } from '../data/empty.js'

function Board ({ sudokuArray = [] }) {
  const selectedCell = useSelector((state) => state.cells.selectedCell)
  const pullData = (data) => {
    if (selectedCell && sudokuArray[selectedCell.rowIndex][selectedCell.columnIndex] === 0) {
      sudokuArray[selectedCell.rowIndex][selectedCell.columnIndex] = data
    }
  }

  const renderMiniBoards = () => {
    if (isSolved) sudokuArray = empty
    const miniBoardSize = 3 // Number of cells in each mini-board
    const totalRows = sudokuArray.length

    return sudokuArray.map((row, rowIndex) => (
      <BoardWrapper
        key={rowIndex}
        className={`column ${rowIndex % 3 === 2 && rowIndex !== totalRows - 1 ? 'board-separator-row' : ''}`}
      >
        {row.map((number, columnIndex) => (
          <React.Fragment key={columnIndex}>
            <Cell rowIndex={rowIndex} columnIndex={columnIndex} number={number} />
            {(columnIndex + 1) % miniBoardSize === 0 && columnIndex !== row.length - 1 && (
              <div className='board-separator-column' />
            )}
          </React.Fragment>
        ))}
      </BoardWrapper>
    ))
  }
  const isSolved = JSON.stringify(sudokuArray) === JSON.stringify(dataSolved)
  return (

    <BoardContainer className='Board'>
      {isSolved && (<WinPanel>YOU WIN</WinPanel>)}
      {renderMiniBoards()}
      <UserTools className='UserTools' func={pullData} />
    </BoardContainer>

  )
}

export default Board
