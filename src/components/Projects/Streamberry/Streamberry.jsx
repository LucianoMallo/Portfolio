import React from 'react'
import Logo from '../../CommonComponents/Logo/Logo'
import codeLogo from '../../../assets/images/codeLogo.png'

class Streamberry extends React.Component {
  render () {
    return (
      <div className='MineSweeper'>
        <h1>Streamberry</h1>
        <p>Streamberry is simil version of Netflix. It use an api to retrieve movies from imdb.</p>
        <Logo src={codeLogo} alt='MineSweeper Link' width={30} height={30} href='https://lucianomallo.github.io/Streamberry/' text='Go search a movie at Streamberry' />
      </div>
    )
  }
}

export default Streamberry
