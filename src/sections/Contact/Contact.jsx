import './Contact.css'
import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render () {
    return (
      <div className='Contact'>
        <h1>Welcome to My Website</h1>
        <h2 className='Contact-description'>
          Hello! I'm Luciano.
        </h2>
      </div>
    )
  }
}

export default Home
