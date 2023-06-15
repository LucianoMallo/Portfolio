import React from 'react'
import PropTypes from 'prop-types'
import { Container, Image, Link } from './Logo_Styles'

const Logo = ({ src, alt, width, height, href = null, text = null }) => {
  if (href == null && text == null) {
    return (
      <Container>
        <Image src={src} alt={alt} width={width} height={height} />
      </Container>
    )
  } else {
    return (
      <Container>
        <a href={href}>
          <Image src={src} alt={alt} width={width} height={height} />
        </a>
        <Link href={href} target='_blank' rel='noopener noreferrer'>
          {text}
        </Link>
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
