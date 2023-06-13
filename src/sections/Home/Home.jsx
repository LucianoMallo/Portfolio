import './Home.css'
import React from 'react'

class Home extends React.Component {
  render () {
    return (
      <div className='Home'>
        <h1>Welcome to My Website</h1>
        <p className='Home-description'>
          Hello! I'm Luciano. Two years ago, I started my journey in the world of programming. I am passionate about programming, and I consider myself a reliable person who is committed to my work. Over the past year, I have had the opportunity to do my internship at a prominent company called Travelport leader in the technology sector.
          This experience has given me valuable exposure to the work environment, allowing me to apply my skills and knowledge to real projects. I love facing new challenges and constantly learning.
          I am always open to taking on challenges that help me grow professionally and improve my skills as a programmer. I am excited to join a dynamic team where I can contribute my technical skills, work ethic, and passion for programming. I am always willing to learn from others and contribute new ideas.
        </p>
        <a
          className='Source-Code'
          href='https://github.com/LucianoMallo/test'
          target='_blank'
          rel='noopener noreferrer'
        >
          View Source Code
        </a>
      </div>
    )
  }
}

export default Home
