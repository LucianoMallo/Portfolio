import styled from 'styled-components'

export const ProjectsContainer = styled.div`
  flex-direction: column;
  text-align: center;
  align-items: center;
  width: 100%;
`

export const ProjectsNavBar = styled.ul`
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(100px,1fr));
  gap: 55px;
  width:100%;

  a:hover {
    position: relative;
    transition: color 0.3s ease;
  }
`
