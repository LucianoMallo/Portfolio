import styled from 'styled-components'

export const Container = styled.a`
  display: inline-block;
  
  align-items: center;
  justify-content: center;
  padding: 10px 30px;
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
