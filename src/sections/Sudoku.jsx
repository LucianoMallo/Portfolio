import { Provider } from 'react-redux'
import React from 'react'
import store from './stores/store'
import './Sudoku.css'
import Board from './board/board'
import { Data } from './data/data'
import Timer from './timer/timer'

class Sudoku extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <div className='Sudoku'>
          <header className='Sudoku-header'>
            <h1>Sudoku</h1>
          </header>
          <div className='ContentContainer'>
            <Timer />
            <Board sudokuArray={Data} />

          </div>
        </div>
      </Provider>
    )
  }
}

export default Sudoku
