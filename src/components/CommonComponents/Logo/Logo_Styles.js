import styled from 'styled-components'

export const Container = styled.a`
  display: inline-block;
  text-align: center;
  item-align: center;
  margin: 0 auto;
  padding: 0;

  text-decoration: none;
  border-radius: 20px;
  transition: background-color 0.3s ease;
`

export const Image = styled.img`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
`

export const Text = styled.p`
  margin: 0;
  text-align: center;
`
