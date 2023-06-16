import React from 'react'
import PropTypes from 'prop-types'
import { Container, Image, Text } from './Logo_Styles'

const Logo = ({ src, alt, width, height, href = null, text = null }) => {
  if (href == null && text == null) {
    return (

      <Image src={src} alt={alt} width={width} height={height} />

    )
  } else {
    return (
      <Container href={href} target='_blank' rel='noopener noreferrer' className='LogoLink'>
        <Image src={src} alt={alt} width={width} height={height} />
        <Text>
          {text}
        </Text>
      </Container>
    )
  }
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  href: PropTypes.string,
  text: PropTypes.string
}

export default Logo
