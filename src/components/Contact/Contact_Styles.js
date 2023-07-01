import styled from 'styled-components'

export const ContactContainer = styled.div`
text-align: justify;
margin:40px 40px 10px;
`

export const Heading = styled.h1`
text-align: center;
item-align: center;
font-size: 24px;
margin-bottom: 10px;
`

export const SubHeading = styled.h2`
  text-align: center;
  font-size: 18px;
  margin-bottom: 8px;
`

export const Paragraph = styled.p`
  text-align: justify;
  item-align: center;
  margin-bottom: 16px;
`
export const SocialLinks = styled.div`
margin-top: 30px;
item-align: center;
justify-content: center;
display: grid;
grid-template-columns: repeat(auto-fit,minmax(150px,1fr));
`
export const ContactButton = styled.button`
margin: 0 auto;
padding: 0;
display: flex;
background-color: transparent;
&:hover {
  background-color: transparent;
}
&:active {
  background-color: transparent;
}
`
