import { Link } from 'react-router-dom'
import { NavBarLinks } from './NavBar_Styles'

export default function NavBar () {
  return (
    <NavBarLinks className='NavBarLinks'>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/about'>About</Link>
      </li>
      <li>
        <Link to='/projects'>Projects</Link>
      </li>
      <li>
        <Link to='/contact'>Contact</Link>
      </li>
    </NavBarLinks>

  )
}
