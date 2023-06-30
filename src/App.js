import './App.css'
import React from 'react'
import { Routes, Route } from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/Home'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/CommonComponents/Footer/Footer'
import NavBar from './components/CommonComponents/NavBar/NavBar'

function App () {
  return (
    <div className='App'>
      <header className='App-header'>
        <NavBar />
      </header>

      <div className='main'>
        <Routes>
          <Route path='/*' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/projects/*' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>

      <footer className='App-footer'>
        <Footer />
      </footer>
    </div>
  )
}

export default App
