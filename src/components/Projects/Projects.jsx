import React from 'react'
import './Projects-styles.css'
import { Routes, Route, Link } from 'react-router-dom'
import Sudoku from './Sudoku/Sudoku'
import MineSweeper from './MineSweeper/MineSweeper'
import Streamberry from './Streamberry/Streamberry'
import { ProjectsContainer, ProjectsNavBar } from './Projects_Styles'

class Projects extends React.Component {
  render () {
    function Paragraph () {
      return (
        <>

          <p>Here you can see some game that i did on react and the one that are being developer</p>
        </>
      )
    }

    return (
      <ProjectsContainer className='Projects'>
        <h1>Projects!</h1>
        <ProjectsNavBar id='ProjectsNav'>
          <li>
            <Link to='/projects/sudoku'>Sudoku</Link>
          </li>
          <li>
            <Link to='/projects/minesweeper'>MineSweeper</Link>
          </li>
          <li>
            <Link to='/projects/streamberry'>Streamberry</Link>
          </li>
        </ProjectsNavBar>

        <Routes>
          <Route path='/' Component={Paragraph} />
          <Route path='sudoku' element={<Sudoku />} />
          <Route path='minesweeper' element={<MineSweeper />} />
          <Route path='streamberry' element={<Streamberry />} />
        </Routes>

      </ProjectsContainer>
    )
  }
}

export default Projects
