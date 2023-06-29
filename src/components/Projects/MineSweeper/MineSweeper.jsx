import React from 'react'
import Logo from '../../CommonComponents/Logo/Logo'
import codeLogo from '../../../assets/images/codeLogo.png'

class MineSweeper extends React.Component {
  render () {
    return (
      <div className='MineSweeper'>
        <h1>MineSweeper</h1>
        <p>I'm migrating this game to react from my old javascript version.</p>

        <Logo src={codeLogo} alt='MineSweeper Link' width={30} height={30} href='https://lucianomallo.github.io/MineSweeperJS/' text='Go to play MineSweeper' />
        <p>Under construction...</p>
      </div>
    )
  }
}

export default MineSweeper
