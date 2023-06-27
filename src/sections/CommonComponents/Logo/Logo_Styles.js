import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  a {
    display: inline-block;
    margin-right: 10px;
    text-decoration: none;
    color: #fff;
  }
`
export const Image = styled.img`
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  margin-right: 10px;
`

export const Link = styled.a`
display: inline-block;
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
