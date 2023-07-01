import React from 'react'
import LinkedInLogo from '../../assets/images/LinkedIn_logo.png'
import Logo from '../CommonComponents/Logo/Logo'
import { AboutContainer, Title, Description, LinkedInContainer } from './About_Styles'

function About () {
  return (
    <AboutContainer className='About'>
      <Title className='Title'>About Me</Title>
      <Description className='About-description'>
        Hello! I'm Luciano. Two years ago, I started my journey in the world of programming.
      </Description>
      <Description className='About-description'>
        I am passionate about programming, and I consider myself a reliable person who is committed to my work. Over the past year, I have had the opportunity to do my internship at a prominent company called Travelport leader in the technology sector.
        This experience has given me valuable exposure to the work environment, allowing me to apply my skills and knowledge to real projects.
      </Description>
      <Description className='About-description'>I love facing new challenges and constantly learning.
        I am always open to taking on challenges that help me grow professionally and improve my skills as a programmer. I am excited to join a dynamic team where I can contribute my technical skills, work ethic, and passion for programming. I am always willing to learn from others and contribute new ideas.
      </Description>
      <LinkedInContainer className='LinkedIn-container'>
        <Logo text='Catch me in LinkedIn' width={30} height={30} alt='LinkedIn Logo' src={LinkedInLogo} href='https://www.linkedin.com/in/luciano-mallo-tomaso/' />
      </LinkedInContainer>
    </AboutContainer>
  )
}

export default About
