import './App.css'
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import About from './sections/About/About'
import Home from './sections/Home/Home'
import Sudoku from './sections/Games/Sudoku/Sudoku'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <nav>
            <ul id='Navigation'>
              <li>
                <Link to='/Portfolio'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/sudoku'>Sudoku</Link>
              </li>
            </ul>
          </nav>
        </header>

        <div className='content'>
          <Routes>
            <Route path='/Portfolio' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/sudoku' element={<Sudoku />} />
          </Routes>
        </div>

        <footer className='App-footer'>
          <div className='FooterLinks'>
            <Link to='/' className='Links'>
              Home
            </Link>
            <Link to='/' className='Links'>
              Terms and Conditions
            </Link>
            <Link to='/' className='Links'>
              Privacy Policies
            </Link>
            <Link to='/' className='Links'>
              Collections Statement
            </Link>
            <Link to='/about' className='Links'>
              Help
            </Link>
            <Link to='/' className='Links'>
              Contact
            </Link>
          </div>
          <div className='allRights'>
            © {new Date().getFullYear()} - Luciano Ezequiel Mallo Tomaso All Right Reserved
          </div>
        </footer>
      </div>
    )
  }
}

export default App
