import { ContactContainer, Heading, SubHeading, Paragraph, SocialLinks, ContactButton } from './Contact_Styles'
import React from 'react'
import LinkedInLogo from '../../assets/images/LinkedIn_logo.png'
import GithubLogo from '../../assets/images/Github_logo.png'
import Logo from '../CommonComponents/Logo/Logo'
import EmailLogo from '../../assets/images/Email_logo.png'

function Contact () {
  const handleContactClick = () => {
    const newWindow = window.open('mailto:malloluciano@gmail.com')
    newWindow.opener = null
  }

  return (
    <ContactContainer>
      <Heading>Contact</Heading>
      <Paragraph>
        Hello! I'm Luciano, a passionate web developer with a focus on React.
      </Paragraph>
      <Paragraph>
        I love building interactive and user-friendly websites. If you have any
        questions or would like to collaborate, feel free to reach out to me!
      </Paragraph>
      <SubHeading>Catch me on the social networks</SubHeading>
      <SocialLinks>
        <Logo text='LinkedIn' width={20} alt='LinkedIn Logo' height={20} src={LinkedInLogo} href='https://www.linkedin.com/in/luciano-mallo-tomaso/' />
        <Logo text='Github' width={20} alt='Github Logo' height={20} src={GithubLogo} href='https://github.com/LucianoMallo/Portfolio' />
        <ContactButton onClick={handleContactClick}>
          <Logo text='Contact Me' width={70} height={30} alt='Email Logo' src={EmailLogo} />
        </ContactButton>
      </SocialLinks>

    </ContactContainer>
  )
}

export default Contact
