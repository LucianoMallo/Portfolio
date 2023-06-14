import './App.css'
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import About from './sections/About/About'
import Home from './sections/Home/Home'
import Games from './sections/Games/Games'
import Contact from './sections/Contact/Contact'

class App extends React.Component {
  render () {
    return (
      <div className='App'>
        <div>
          <nav>
            <ul id='Navigation'>
              <li>
                <Link to='/'>Home</Link>
              </li>
              <li>
                <Link to='/about'>About</Link>
              </li>
              <li>
                <Link to='/sudoku'>Sudoku</Link>
              </li>
              <li>
                <Link to='/contact'>Contact</Link>
              </li>
            </ul>
          </nav>
        </header>

        <div className='content'>
          <Routes>
            <Route path='/Portfolio/*' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/games/*' element={<Games />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </div>

        <footer className='App-footer'>
          <div className='FooterLinks'>
            <Link to='/Portfolio' className='Links'>
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
            <Link to='/contact' className='Links'>
              Contact
            </Link>
          </div>
          <div className='allRights'>Copyright 2016 DEMO Streaming All Right Reserved </div>
        </footer>
      </div>
    )
  }
}

export default App
