import React from 'react'
import './Projects-styles.css'
import { Routes, Route, Link } from 'react-router-dom'
import Sudoku from './Sudoku/Sudoku'
import MineSweeper from './MineSweeper/MineSweeper'
import Streamberry from './Streamberry/Streamberry'

class Projects extends React.Component {
  render () {
    function Paragraph () {
      return (
        <>
          <h1>Projects!</h1>
          <p>Here you can see some game that i did on react and the one that are being developer</p>
        </>
      )
    }

    return (
      <div className='Projects'>

        <nav>
          <ul id='ProjectsNav'>
            <li>
              <Link to='/projects/sudoku'>Sudoku</Link>
            </li>
            <li>
              <Link to='/projects/minesweeper'>MineSweeper</Link>
            </li>
            <li>
              <Link to='/projects/streamberry'>Streamberry</Link>
            </li>
          </ul>
        </nav>

        <div className='ProjectContainer'>

          <Routes>
            <Route path='/' Component={Paragraph} />
            <Route path='sudoku' element={<Sudoku />} />
            <Route path='minesweeper' element={<MineSweeper />} />
            <Route path='streamberry' element={<Streamberry />} />
          </Routes>
        </div>
      </div>
    )
  }
}

export default Projects
