import styled from 'styled-components'

export const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 0 16px;
  }
`

export const Heading = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
`

export const SubHeading = styled.h2`
  font-size: 18px;
  margin-bottom: 8px;
`

export const Paragraph = styled.p`
  margin-bottom: 16px;
`

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 16px;
`

export const ListItem = styled.li`
  margin-bottom: 8px;
`

export const SocialLinks = styled.div`
  display: flex;
  margin-top: 16px;
`
export const ContactButton = styled.button`
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
