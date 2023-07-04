import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../CommonComponents/Logo/Logo'
import codeLogo from '../../assets/images/codeLogo.png'
import { HomeContainer } from './Home_Styles'

function Home () {
  return (
    <HomeContainer className='Home'>
      <h1>Welcome to My Website</h1>
      <h2 className='Home-description'>
        <Logo src={codeLogo} alt='CodeLogo' width={30} height={30} />
        <p> Hello! I'm Luciano.</p>
      </h2>
      <p className='Presentation'>
        This is my personal page. Here you can find information about me, my projects, and my contact information.
        Also, you can find my resume in the following link:
        <Link to='/about' className='About'>
          <button>About Me</button>
        </Link>
      </p>
    </HomeContainer>
  )
}

export default Home
