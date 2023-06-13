import './Home.css'
import React from 'react'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  render () {
    return (
      <div className='Home'>
        <h1>Welcome to My Website</h1>
        <h2 className='Home-description'>
          Hello! I'm Luciano.
        </h2>
        <p>
          This is my personal page. Here you can find information about me, my projects, and my contact information.
          Also, you can find my resume in the following link:
          <Link to='/about' className='About'>
            About Me
          </Link>
        </p>
      </div>
    )
  }
}

export default Home
