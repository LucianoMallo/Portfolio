import React from 'react'
import './Games-styles.css'
import { Routes, Route, Link } from 'react-router-dom'
import Sudoku from './Sudoku/Sudoku'
import MineSweeper from './MineSweeper/MineSweeper'

class Games extends React.Component {
  render () {
    function Paragraph () {
      return (
        <p>Here you can see some game that i did on react and the one that are being developer</p>

      )
    }

    return (
      <div className='Games'>
        <nav>
          <ul id='GamesNav'>
            <li>
              <Link to='/games/sudoku'>Sudoku</Link>
            </li>
            <li>
              <Link to='/games/minesweeper'>MineSweeper</Link>
            </li>
            <li>
              <Link to='/games/etc'>Etc</Link>
            </li>
          </ul>
        </nav>

        <div className='GameContainer'>
          <h1>GAMES!</h1>
          <Routes>
            <Route path='/' Component={Paragraph} />
            <Route path='sudoku' element={<Sudoku />} />
            <Route path='minesweeper' element={<MineSweeper />} />
            {/* Define other routes here */}
          </Routes>
        </div>
      </div>
    )
  }
}

export default Games
