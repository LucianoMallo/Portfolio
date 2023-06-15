import styled from 'styled-components'

export const StartButton = styled.button`
display: inline-block;
padding: 10px 20px;
background-color: coral;
color: #fff;
text-decoration: none;
border: none;
cursor:pointer;
border-radius: 20px;
transition: background-color 0.3s ease;
&:hover {
  background-color: tomato;
}
&:active {
  background-color: crimson;
}
`
