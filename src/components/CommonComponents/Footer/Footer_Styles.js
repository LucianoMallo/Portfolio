import styled from 'styled-components'

export const FooterContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    `
export const FooterLinks = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: repeat(auto-fit,minmax(150px,1fr));
    width:100%;
    gap: 15px;

      a{
        margin: 0 5px;
        position: relative;
        }
    `

export const AllRights = styled.div`
    margin-top: 10px;
    margin-bottom: 10px;

    `
