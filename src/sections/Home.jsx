import './Sections.css'
import React from 'react'

class Home extends React.Component {
  render () {
    return (
      <div className='Home'>
        <header className='Home-header'>
          <h1>Home</h1>
          <a
            className='Source-Code'
            href='https://github.com/LucianoMallo/test'
            target='_blank'
            rel='noopener noreferrer'
          >
            Source-Code
          </a>
        </header>
      </div>

    )
  }
}

export default Home
