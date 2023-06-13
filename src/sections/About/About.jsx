import React from 'react'
import './About.css'
import LinkedInLogo from '../../assets/images/LinkedIn_logo.png'

class About extends React.Component {
  render () {
    return (
      <div className='About'>
        <h1>About Me</h1>
        <p className='About-description'>
          Hello! I'm Luciano. Two years ago, I started my journey in the world of programming.
        </p>
        <p className='About-description'>I am passionate about programming, and I consider myself a reliable person who is committed to my work. Over the past year, I have had the opportunity to do my internship at a prominent company called Travelport leader in the technology sector.
          This experience has given me valuable exposure to the work environment, allowing me to apply my skills and knowledge to real projects.
        </p>
        <p className='About-description'>I love facing new challenges and constantly learning.
          I am always open to taking on challenges that help me grow professionally and improve my skills as a programmer. I am excited to join a dynamic team where I can contribute my technical skills, work ethic, and passion for programming. I am always willing to learn from others and contribute new ideas.
        </p>
        <div className='LinkedIn-container'>
          <a href='https://www.linkedin.com/in/luciano-mallo-tomaso/'>
            <img id='LinkedIn-Logo' src={LinkedInLogo} alt='LinkedIn Logo' href='https://www.linkedin.com/in/luciano-mallo-tomaso/' />
          </a>
          <a
            className='LinkedIn'
            href='https://www.linkedin.com/in/luciano-mallo-tomaso/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Go to my LinkedIn
          </a>
        </div>
      </div>
    )
  }
}

export default About
