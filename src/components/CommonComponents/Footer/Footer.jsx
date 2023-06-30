import { Link } from 'react-router-dom'
import { FooterContainer, FooterLinks, AllRights } from './Footer_Styles'

export default function Footer () {
  return (
    <FooterContainer className='Footer'>
      <FooterLinks className='FooterLinks'>
        <Link to='/' className='Links'>
          Home
        </Link>
        <Link to='/' className='Links'>
          Terms and Conditions
        </Link>
        <Link to='/' className='Links'>
          Privacy Policies
        </Link>
        <Link to='/' className='Links'>
          Collections Statement
        </Link>
        <Link to='/about' className='Links'>
          Help
        </Link>
        <Link to='/contact' className='Links'>
          Contact
        </Link>
      </FooterLinks>
      <AllRights className='allRights'>
        © {new Date().getFullYear()} - Luciano Ezequiel Mallo Tomaso All Right Reserved
      </AllRights>
    </FooterContainer>
  )
}
