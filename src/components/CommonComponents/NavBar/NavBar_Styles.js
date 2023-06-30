import styled from 'styled-components'

export const NavBarLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(200px,1fr));
  width:100%;

  a:hover {
    position: relative;
    transition: color 0.3s ease;
  }
`
