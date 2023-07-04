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
  margin: 0px 150px 0px 150px;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(50px,1fr));
  

  a:hover {
    position: relative;
    transition: color 0.3s ease;
  }
`
