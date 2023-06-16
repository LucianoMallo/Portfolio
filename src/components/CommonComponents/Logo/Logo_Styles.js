import styled from 'styled-components'

export const Container = styled.a`
  display: flex; /* Added */
  align-items: center; /* Added */
  padding: 10px 20px;
  background-color: coral;
  color: #fff;
  text-decoration: none;
  border-radius: 20px;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: tomato;
  }
  &:active {
    background-color: crimson;
  }
`

export const Image = styled.img`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin-right: 10px;
`

export const Text = styled.p`
  margin: 0;
  text-align: center;
`
